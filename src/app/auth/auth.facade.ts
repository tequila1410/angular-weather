import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getSignInError, isUserLoading, State } from '../store';
import { userLogin } from './state/user.actions';
import { Observable } from 'rxjs';

@Injectable()
export class AuthFacade {

  constructor(private store: Store<State>) {}

  /**
   * Dispatch login action with user credentials
   * @param {string} login
   * @param {string} password
   */
  login(login: string, password: string) {
    this.store.dispatch(userLogin({credentials: {login, password}}))
  }

  /**
   * Check if user loading from store
   * @return {Observable<boolean>}
   */
  isUserLoading(): Observable<boolean> {
    return this.store.pipe(select(isUserLoading));
  }

  /**
   * Get sign in errors from store
   * @return {Observable<string>}
   */
  getSignInError(): Observable<string> {
    return this.store.pipe(select(getSignInError))
  }

}
