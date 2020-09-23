import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { UserActionTypes, userLoginFailure, userLoginSuccess } from './user.actions';
import { AuthService } from '../api/auth.service';
import { User } from '../models/user.model';

@Injectable()
export class UserEffects {

  loginUser$ = createEffect(() => this.actions$.pipe(
      ofType(UserActionTypes.UserLogin),
      exhaustMap((action: any) =>
        this.authService.login(action.credentials).pipe(
          map(data => userLoginSuccess({...data})),
          catchError(error => {
            return of(userLoginFailure({ error }))
          })
        )
      )
    )
  );

  loginUserSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.UserLoginSuccess),
      tap((userData: {user: User, token: string}) => {
        localStorage.setItem('currentUser', JSON.stringify(userData.user));
        localStorage.setItem('token', userData.token);

        this.router.navigate(['/home']);
      })
  ), {dispatch: false});

  logoutUser$ = createEffect(() => this.actions$.pipe(
    ofType(UserActionTypes.UserLogout),
    tap(() => {
      localStorage.removeItem('currentUser');
      localStorage.removeItem('token');

      this.router.navigate(['auth']);
    })
  ), {dispatch: false})

  constructor(
    private actions$: Actions,
    private router: Router,
    private authService: AuthService) {
  }
}

