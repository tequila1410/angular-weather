import { Component, OnInit } from '@angular/core';
import { HomeFacade } from '../../home.facade';
import { Observable } from 'rxjs';
import { WeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  /**
   * Weather for current date
   * @type {WeatherModel}
   */
  currentWeatherData: Observable<WeatherModel>;

  /**
   * Current date
   * @type {Date}
   */
  todayDate: Date;

  constructor(private homeFacade: HomeFacade) {
    this.todayDate = new Date();
    this.currentWeatherData = this.homeFacade.getCurrentWeather();
  }

  ngOnInit(): void {
    this.homeFacade.loadCurrentWeather();
  }

}
