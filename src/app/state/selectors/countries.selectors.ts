import { AppState } from "../app.state";

export const selectCountries = (state: AppState) => state.countries;

export const selectCountriesList = (state: AppState) => state.countries.countries;
