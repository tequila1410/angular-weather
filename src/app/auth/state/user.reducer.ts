import { Action, createReducer, on } from '@ngrx/store';

import { User } from '../models/user.model';
import { userLogin, userLoginFailure, userLoginFromLocalStorage, userLoginSuccess, userLogout } from './user.actions';

export interface State {
  user: User;
  userLoading: boolean;
  authenticated: boolean;
  error: string;
}

const initialState: State = {
  user: undefined,
  userLoading: false,
  authenticated: false,
  error: undefined
};

const usersReducer = createReducer(
  initialState,
  on(userLogin, state => ({...state, userLoading: true, error: undefined})),
  on(userLoginSuccess, (state, action) => ({...state, user: action.user, userLoading: false, authenticated: true})),
  on(userLoginFailure, (state, action) => ({...state, userLoading: false, error: action.error})),
  on(userLoginFromLocalStorage, (state, action) => ({...state, user: action.user, authenticated: true})),
  on(userLogout, state => ({...state, user: undefined, authenticated: false}))
);

export function reducer(state: State | undefined, action: Action): State {
  return usersReducer(state, action);
}
