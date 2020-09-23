import { Component, Input } from '@angular/core';

import { WeatherIcon } from '../../models/weather-icon.model';

@Component({
  selector: 'app-weather-icons-table',
  templateUrl: './weather-icons-table.component.html',
  styleUrls: ['./weather-icons-table.component.css']
})
export class WeatherIconsTableComponent {

  @Input() iconsSource: WeatherIcon[];

  displayedColumns: string[] = ['id', 'description'];

  constructor() { }

}
