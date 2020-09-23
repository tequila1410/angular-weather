import { Component, Input } from '@angular/core';
import { WeatherModel } from '../../models/weather.model';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  @Input() currentWeather: WeatherModel;

  /**
   * Weather date
   * @type {Date}
   */
  @Input() date: Date;

  constructor() {}

}
