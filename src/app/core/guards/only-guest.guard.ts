import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { isUserAuthenticated, State } from '../../store';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OnlyGuestGuard implements CanActivate {

  constructor(private store: Store<State>,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(isUserAuthenticated),
      map(isAuth => {
        if (isAuth) {
          this.router.navigate(['home']);
        }
        return !isAuth;
      })
    );
  }

}
