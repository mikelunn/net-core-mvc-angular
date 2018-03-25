import { Routes} from '@angular/router';
import {NotFoundComponent} from './not-found.component';

export const routes: Routes = [
  {
    path:'weather',
    loadChildren: './weather/weather.module#WeatherModule',
  },
  {
    path:'counter',
    loadChildren: './counter/counter.module#CounterModule',
  },
  { path: '**', pathMatch: 'full', component: NotFoundComponent }
];

