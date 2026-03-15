import { createReducer, on } from "@ngrx/store";
import { SidebarState } from "../interfaces/sidebar.state.interface";
import { hideSidebar, showSidebar } from "../actions/sidebar.actions";

const initialState: SidebarState = {
  visible: false
};

export const sidebarReducer = createReducer(
  initialState,
  on(showSidebar, (state) => ({ ...state, visible: true })),
  on(hideSidebar, (state) => ({ ...state, visible: false })),
);
