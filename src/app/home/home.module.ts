import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule} from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

import { CoreModule } from '../core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { containers } from './containers';
import { components } from './components';
import { HomeFacade } from './home.facade';
import { WeatherService } from './api/weather.service';
import { WeatherEffects } from './state/weather.effects';

@NgModule({
  declarations: [...containers, ...components],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    EffectsModule.forFeature([WeatherEffects]),
    HomeRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [HomeFacade, WeatherService]
})
export class HomeModule { }
