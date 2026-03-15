import { ActionReducerMap } from "@ngrx/store"
import { CountriesState } from "./interfaces/countries.state.interface"
import { countriesReducer } from "./reducers/countries.reducers"
import { SidebarState } from "./interfaces/sidebar.state.interface"
import { sidebarReducer } from "./reducers/sidebar.reducers"
import { WeathersState } from "./interfaces/weathers.state.interface"
import { weathersReducer } from "./reducers/weathers.reducers"

export interface AppState {
  countries: CountriesState,
  weathers: WeathersState,
  sidebar: SidebarState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  countries: countriesReducer,
  weathers: weathersReducer,
  sidebar: sidebarReducer
}
