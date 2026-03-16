import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY } from "rxjs";
import { selectedCountry } from "../actions/countries.actions";
import { WeatherService } from "../../services/weather.service";
import { cleanWeatherData, weatherFetchData, weatherFetchDataSuccess } from "../actions/weathers.actions";

@Injectable()
export class WeathersEffects {

  loadWeathers$ = createEffect(() => this.actions$.pipe(
    ofType(weatherFetchData),
    mergeMap((coords) => this.apiService.getWeatherByCoordinates(coords.latitude, coords.longitude)
      .pipe(
        map(weather => (weatherFetchDataSuccess({ weather }))),
        catchError(() => EMPTY)
      ))
  ));

  cleanWeatherData$ = createEffect(() => this.actions$.pipe(
    ofType(selectedCountry),
    map(() => (cleanWeatherData())),
  ));

  constructor(
    private actions$: Actions,
    private apiService: WeatherService
  ) { }
}
