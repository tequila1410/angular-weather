import {ActionReducerMap, createSelector} from '@ngrx/store';

import * as Users from '../auth/state/user.reducer';
import * as Weathers from '../home/state/weather.reducer'

export interface State {
  users: Users.State;
  weathers: Weathers.State
}

export const reducers: ActionReducerMap<State> = {
  users: Users.reducer,
  weathers: Weathers.reducer
};

export const selectUsers = (state: State) => state.users;
export const selectWeathers = (state: State) => state.weathers;

export const isUserLoading = createSelector(
  selectUsers,
  (state: Users.State) => state.userLoading
)

export const isUserAuthenticated = createSelector(
  selectUsers,
  (state: Users.State) => state.authenticated
)

export const getSignInError = createSelector(
  selectUsers,
  (state: Users.State) => state.error
)

export const getWeatherData = createSelector(
  selectWeathers,
  (state: Weathers.State) => state.currentWeather
)
