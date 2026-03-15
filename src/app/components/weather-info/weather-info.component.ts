import { AsyncPipe, DatePipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { AppState } from '../../state/app.state';
import { Store } from '@ngrx/store';
import { selectWeatherInformation } from '../../state/selectors/weathers.selectors';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-info',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    TableModule,
    DatePipe
  ],
  templateUrl: './weather-info.component.html',
  styleUrl: './weather-info.component.css'
})
export class WeatherInfoComponent {

  weatherInformation$ = this.store.select(selectWeatherInformation)
  constructor(
    private store: Store<AppState>,
    public weatherService: WeatherService
  ){

  }


}
