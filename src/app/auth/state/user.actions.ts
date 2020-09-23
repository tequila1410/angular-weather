import { createAction, props } from '@ngrx/store';

import { User } from '../models/user.model';
import { Credentials } from '../models/credentials.model';

export enum UserActionTypes {
  UserLogin = '[AUTHENTICATION] User Login',
  UserLoginSuccess = '[AUTHENTICATION] User Login Success',
  UserLoginFailure = '[AUTHENTICATION] User Login Failure',
  UserLoginFromLocalStorage = '[AUTHENTICATION] User Login From LocalStorage',
  UserLogout = '[AUTHENTICATION] User Logout',
}

export const userLogin = createAction(
  UserActionTypes.UserLogin,
  props<{credentials: Credentials}>()
);

export const userLoginSuccess = createAction(
  UserActionTypes.UserLoginSuccess,
  props<{user: User, token: string}>()
);

export const userLoginFailure = createAction(
  UserActionTypes.UserLoginFailure,
  props<{error: string}>()
);

export const userLoginFromLocalStorage = createAction(
  UserActionTypes.UserLoginFromLocalStorage,
  props<{user: User, token: string}>()
);

export const userLogout = createAction(UserActionTypes.UserLogout);
