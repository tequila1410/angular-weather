import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { WeatherModel } from '../models/weather.model';

@Injectable()
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  /**
   * Get current user city by ip-api.com service
   */
  getUserCountry(): Observable<string> {
    return this.httpClient.get('http://ip-api.com/json')
      .pipe(
        map((res: any) => res.city)
      );
  }

  /**
   * Get weather data by city from openweathermap service
   * @param {string} city
   */
  getCurrentWeather(city: string): Observable<WeatherModel> {
    const params = new HttpParams()
      .set('q', city)
      .set('units', 'metric')
      .set('appid', environment.openweathermapApiKey);

    return this.httpClient.get<WeatherModel>('https://api.openweathermap.org/data/2.5/weather', {params})
  }
}
