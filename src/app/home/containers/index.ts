import { WeatherComponent } from './weather/weather.component';
import { HomeComponent } from './home/home.component';
import { WeatherIconListComponent } from './weather-icon-list/weather-icon-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const containers: any[] = [
  HomeComponent,
  WeatherComponent,
  WeatherIconListComponent,
  NotFoundComponent
];

export * from './home/home.component';
export * from './weather/weather.component';
export * from './weather-icon-list/weather-icon-list.component';
export * from './not-found/not-found.component';
