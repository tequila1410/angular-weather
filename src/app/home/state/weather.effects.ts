import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WeatherService } from '../api/weather.service';
import { fetchWeatherSuccess, WeatherActionTypes } from './weather.actions';
import { map, mergeMap } from 'rxjs/operators';
import { WeatherModel } from '../models/weather.model';

@Injectable()
export class WeatherEffects {
  fetchWeather$ = createEffect(() => this.actions$.pipe(
    ofType(WeatherActionTypes.FetchWeather),
    mergeMap(() => {
      return this.weatherService.getUserCountry()
    }),
    mergeMap(city => {
      return this.weatherService.getCurrentWeather(city)
    }),
    map((weather: WeatherModel) => {
      return fetchWeatherSuccess({weather})
    })
  ))

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService) {
  }
}
