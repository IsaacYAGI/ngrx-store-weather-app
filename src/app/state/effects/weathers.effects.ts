import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY } from "rxjs";
import { selectedCountry } from "../actions/countries.actions";
import { WeatherService } from "../../services/weather.service";
import { weatherFetchDataSuccess } from "../actions/weathers.actions";

@Injectable()
export class WeathersEffects {

  loadWeathers$ = createEffect(() => this.actions$.pipe(
    ofType(selectedCountry),
    mergeMap((countrySelected) => this.apiService.getWeatherByCoordinates(countrySelected.country.latitude, countrySelected.country.longitude)
      .pipe(
        map(weather => (weatherFetchDataSuccess({weather}))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: WeatherService
  ) {}
}
