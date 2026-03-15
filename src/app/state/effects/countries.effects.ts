import { Injectable } from "@angular/core";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, EMPTY } from "rxjs";
import { filterCountries, filterCountriesSuccess, selectedCountry } from "../actions/countries.actions";
import { GeocodingService } from "../../services/geocoding.service";
import { weatherFetchData } from "../actions/weathers.actions";

@Injectable()
export class CountriesEffects {

  loadCountries$ = createEffect(() => this.actions$.pipe(
    ofType(filterCountries),
    mergeMap(({ name }) => this.apiService.getCountriesByName(name)
      .pipe(
        map(countries => (filterCountriesSuccess({ countries: countries.results }))),
        catchError(() => EMPTY)
      ))
  )
  );

  selectedCountry$ = createEffect(() => this.actions$.pipe(
    ofType(selectedCountry),
    map(countrySelected => (weatherFetchData({ latitude: countrySelected.country.latitude, longitude: countrySelected.country.longitude }))),
  ));

  constructor(
    private actions$: Actions,
    private apiService: GeocodingService
  ) { }
}
