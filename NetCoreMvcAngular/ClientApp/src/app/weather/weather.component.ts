import { Component, OnInit } from '@angular/core';
import {PreloadService} from '../core/services/preload.service';
import {WeatherModel} from './weather.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  model: WeatherModel[];
  constructor(private preloadService: PreloadService<WeatherModel[]>) { }

  ngOnInit() {
    this.model = this.preloadService.data;
  }

}
