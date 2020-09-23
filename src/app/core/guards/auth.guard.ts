import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { isUserAuthenticated, State } from '../../store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private store: Store<State>,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.isAuth();
  }

  canLoad(): Observable<boolean> {
    return this.isAuth();
  }

  private isAuth(): Observable<boolean> {
    return this.store.pipe(
      select(isUserAuthenticated),
      tap(isAuth => {
        if (!isAuth) {
          console.log('lets naviagate')
          this.router.navigate(['auth']);
        }
      })
    );
  }

}
