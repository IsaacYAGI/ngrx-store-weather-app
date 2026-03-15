import { createReducer, on } from "@ngrx/store";
import { WeathersState } from "../interfaces/weathers.state.interface";
import { weatherFetchData, weatherFetchDataSuccess } from "../actions/weathers.actions";

const initialState: WeathersState = {
  weather: null,
  loading: false,

};

export const weathersReducer = createReducer(
  initialState,
  on(weatherFetchData, (state) => ({ ...state, loading: true })),
  on(weatherFetchDataSuccess, (state, payload) => ({ ...state, loading: false, weather: payload.weather })),
);
