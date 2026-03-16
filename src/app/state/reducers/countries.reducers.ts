import { createReducer, on } from "@ngrx/store";
import { CountriesState } from "../interfaces/countries.state.interface";
import { cleanFilterCountries, filterCountries, filterCountriesSuccess, selectedCountry } from "../actions/countries.actions";

const initialState: CountriesState = {
  countries: [],
  loading: false,
  selectedCountry: null,
  query: "",
};

export const countriesReducer = createReducer(
  initialState,
  on(filterCountries, (state, payload) => ({ ...state, loading: true, query: payload.name })),
  on(filterCountriesSuccess, (state, payload) => ({ ...state, loading: false, countries: payload.countries })),
  on(selectedCountry, (state, payload) => ({ ...state, selectedCountry: payload.country })),
  on(cleanFilterCountries, (state) => ({ ...state, countries: [], query: "" })),

);
