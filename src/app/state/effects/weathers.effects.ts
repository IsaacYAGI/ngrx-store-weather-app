import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, catchError, EMPTY, switchMap } from "rxjs";
import { WeatherService } from "../../services/weather.service";
import { weatherFetchData, weatherFetchDataSuccess } from "../actions/weathers.actions";

@Injectable()
export class WeathersEffects {

  loadWeathers$ = createEffect(() => this.actions$.pipe(
    ofType(weatherFetchData),
    switchMap((coords) => this.apiService.getWeatherByCoordinates(coords.latitude, coords.longitude)
      .pipe(
        map(weather => (weatherFetchDataSuccess({ weather }))),
        catchError(() => EMPTY)
      ))
  ));

  constructor(
    private actions$: Actions,
    private apiService: WeatherService
  ) { }
}
