import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weatherIcon'
})
export class WeatherIconPipe implements PipeTransform {

  transform(value: string): unknown {
    return `http://openweathermap.org/img/wn/${value}.png`;
  }

}
