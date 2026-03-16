import { createAction, props } from "@ngrx/store";
import { GeocodingResponseResult } from "../../interfaces/geocoding.interface";

export const filterCountries = createAction('[Country selection] Filter countries', props<{ name: string }>());
export const filterCountriesSuccess = createAction('[Country selection] Filter countries success', props<{ countries: GeocodingResponseResult[] }>());
export const selectedCountry = createAction('[Country selection] Selected country', props<{ country: GeocodingResponseResult }>());
export const cleanFilterCountries = createAction('[Country selection] Clean filter countries');
