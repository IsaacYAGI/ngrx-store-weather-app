import { createReducer, on } from "@ngrx/store";
import { WeathersState } from "../interfaces/weathers.state.interface";
import { weatherFetchData, weatherFetchDataSuccess } from "../actions/weathers.actions";
import { selectedCountry } from "../actions/countries.actions";

const initialState: WeathersState = {
  weather: null,
  loading: false,

};

export const weathersReducer = createReducer(
  initialState,
  on(weatherFetchData, (state) => ({ ...state, loading: true })),
  on(weatherFetchDataSuccess, (state, payload) => ({ ...state, loading: false, weather: payload.weather })),
  //Listen to selectedCountry action to clean weather data when a new country is selected
  on(selectedCountry, (state) => ({ ...state, weather: null })),
);
