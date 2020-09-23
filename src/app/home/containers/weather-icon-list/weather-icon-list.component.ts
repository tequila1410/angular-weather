import { Component } from '@angular/core';

import { WeatherIcon } from '../../models/weather-icon.model';
import { WeatherIcons } from '../../../core/datasources/weather-icons';

@Component({
  selector: 'app-weather-icon-list',
  templateUrl: './weather-icon-list.component.html',
  styleUrls: ['./weather-icon-list.component.css']
})
export class WeatherIconListComponent {

  /**
   * Data of weather icons
   */
  icons: WeatherIcon[];

  constructor() {
    this.icons = WeatherIcons
  }

}
