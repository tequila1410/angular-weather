import { createAction, props } from '@ngrx/store';
import { WeatherModel } from '../models/weather.model';

export enum WeatherActionTypes {
  FetchWeather = '[WEATHER] Loading Weather Data',
  FetchWeatherSuccess = '[WEATHER] Loading Weather Data Success'
}

export const fetchWeather = createAction(
  WeatherActionTypes.FetchWeather,
);

export const fetchWeatherSuccess = createAction(
  WeatherActionTypes.FetchWeatherSuccess,
  props<{weather: WeatherModel}>()
);
