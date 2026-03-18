import { createAction, props } from "@ngrx/store";
import { WeatherResponse } from "../../interfaces/weather.interface";

export const weatherFetchData = createAction('[Weather] Fetch weather data', props<{ latitude: number, longitude: number }>());
export const weatherFetchDataSuccess = createAction('[Weather] Fetch weather data success', props<{ weather: WeatherResponse }>());
