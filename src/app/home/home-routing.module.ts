import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent, NotFoundComponent, WeatherComponent, WeatherIconListComponent } from './containers';

const routes: Route[] = [{
  path: '',
  component: HomeComponent,
  children:[
    { path: 'weather', component: WeatherComponent },
    { path: 'weather-icons', component: WeatherIconListComponent },
    { path: '404', component: NotFoundComponent },
    { path: '', redirectTo: 'weather', pathMatch: 'full'},
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule { }
