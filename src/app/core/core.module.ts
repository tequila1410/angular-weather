import { NgModule } from '@angular/core';
import {WeatherIconPipe} from './pipes/weather-icon.pipe';



@NgModule({
  declarations: [WeatherIconPipe],
  exports: [WeatherIconPipe]
})
export class CoreModule { }
