import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getWeatherData, State } from '../store';
import { userLogout } from '../auth/state/user.actions';
import { Observable } from 'rxjs';
import { fetchWeather } from './state/weather.actions';
import { WeatherModel } from './models/weather.model';

@Injectable()
export class HomeFacade {

  constructor(private store: Store<State>) {}

  /**
   * Log out user
   */
  logOut(): void {
    this.store.dispatch(userLogout())
  }

  /**
   * Load weather by user city
   */
  loadCurrentWeather(): void {
    this.store.dispatch(fetchWeather())
  }

  /**
   * Get weather by user city
   * @return {Observable<WeatherModel>}
   */
  getCurrentWeather(): Observable<WeatherModel> {
    return this.store.pipe(select(getWeatherData))
  }

}
