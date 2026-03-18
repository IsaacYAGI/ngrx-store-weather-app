import { createReducer, on } from "@ngrx/store";
import { CountriesState } from "../interfaces/countries.state.interface";
import { filterCountries, filterCountriesSuccess, selectedCountry } from "../actions/countries.actions";

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
  //When a country is selected, we want to set the selectedCountry in the state, but also clean the
  // countries list and the query to reset the search
  on(selectedCountry, (state, payload) => ({ ...state, selectedCountry: payload.country, countries: [], query: "" })),
);
