import { RootState } from "../store";

export const selectMapOptions = (state: RootState) => state.mapOptions;

export const selectMarkerOpacity = (state: RootState) => state.mapOptions.markerOpacity;