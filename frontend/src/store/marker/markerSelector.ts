import { RootState } from "../store";

export const selectedMarker = (state: RootState) => state.marker.selected;

export const selectedLatLng = (state: RootState) => state.marker.latlng;