import { AppState } from "../app.state";

export const selectCountries = (state: AppState) => state.countries;

export const selectCountriesList = (state: AppState) => state.countries.countries;

export const selectSelectedCountry = (state: AppState) => state.countries.selectedCountry;

export const selectCountriesLoading = (state: AppState) => state.countries.loading;
