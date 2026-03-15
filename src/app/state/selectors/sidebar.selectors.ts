import { AppState } from "../app.state";

export const selectSidebar = (state: AppState) => state.sidebar;

export const selectSidebarVisible = (state: AppState) => state.sidebar.visible;
