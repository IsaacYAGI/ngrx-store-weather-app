import { WeatherResponse } from "../../interfaces/weather.interface";

export interface WeathersState {
  loading: boolean;
  weather: WeatherResponse | null;
}
