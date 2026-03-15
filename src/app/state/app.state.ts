import { ActionReducerMap } from "@ngrx/store"
import { CountriesState } from "./interfaces/countries.state.interface"
import { countriesReducer } from "./reducers/countries.reducers"
import { SidebarState } from "./interfaces/sidebar.state.interface"
import { sidebarReducer } from "./reducers/sidebar.reducers"

export interface AppState {
  countries: CountriesState,
  sidebar: SidebarState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  countries: countriesReducer,
  sidebar: sidebarReducer
}
