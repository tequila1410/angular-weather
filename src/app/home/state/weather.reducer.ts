import { WeatherModel } from '../models/weather.model';
import { Action, createReducer, on } from '@ngrx/store';
import { fetchWeather, fetchWeatherSuccess } from './weather.actions';

export interface State {
  currentWeather: WeatherModel,
  weatherLoading: boolean;
}

const initialState: State = {
  currentWeather: undefined,
  weatherLoading: false
}

const weatherReducer = createReducer(
  initialState,
  on(fetchWeather, state => ({...state, weatherLoading: true})),
  on(fetchWeatherSuccess, (state, action) => ({...state, weatherLoading: false, currentWeather: action.weather}))
)

export function reducer(state: State | undefined, action: Action) {
  return weatherReducer(state, action);
}
