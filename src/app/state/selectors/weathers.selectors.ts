import { AppState } from "../app.state";

export const selectWeathers = (state: AppState) => state.weathers;

export const selectWeatherInformation = (state: AppState) => state.weathers.weather;

export const selectWeatherLoading = (state: AppState) => state.weathers.loading;
