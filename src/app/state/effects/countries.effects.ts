import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY } from "rxjs";
import { filterCountries, filterCountriesSuccess } from "../actions/countries.actions";
import { GeocodingService } from "../../services/geocoding.service";

@Injectable()
export class CountriesEffects {

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(filterCountries),
    mergeMap(({name}) => this.apiService.getCountriesByName(name)
      .pipe(
        map(countries => (filterCountriesSuccess({ countries: countries.results }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: GeocodingService
  ) {}
}
