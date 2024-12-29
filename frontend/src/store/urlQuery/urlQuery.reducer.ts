import { createSlice } from "@reduxjs/toolkit";
import { Maybe } from "../../types/global";

interface UrlQueryState {
  selected: Maybe<string>;
  latlng?: [number, number];
  zoom?: number;
}

const urlParams = new URLSearchParams(window.location.search);
const selected = urlParams.get('s');
const latlng = urlParams.get('ll');
const zoom = urlParams.get('z');

const initialState: UrlQueryState = {
  selected,
  latlng: latlng ? latlng.split('x').map(Number) as [number, number]: [32, -83],
  zoom: zoom ? parseInt(zoom) : 4,
};

export const urlQuerySlice = createSlice({
  name: 'urlQuery',
  initialState,
  reducers: {
    setSelectedProperty: (state, action) => {
      state.selected = action.payload;
    },
    setLatLng: (state, action) => {
      state.latlng = action.payload;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    },
  },
});

export const { setSelectedProperty, setLatLng, setZoom } = urlQuerySlice.actions;

export default urlQuerySlice.reducer;