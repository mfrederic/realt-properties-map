import { RootState } from "../store";

export const selectedProperty = (state: RootState) => state.urlQuery.selected;

export const selectedLatLng = (state: RootState) => state.urlQuery.latlng;

export const selectedZoom = (state: RootState) => state.urlQuery.zoom;