import { createSlice } from "@reduxjs/toolkit";
import { Maybe } from "../../types/global";

interface UrlQueryState {
  selected: Maybe<string>;
  latlng?: [number, number];
  zoom?: number;
}

const urlParams = new URLSearchParams(window.location.search);
const selected = urlParams.get('selected');
const latlng = urlParams.get('latlng');
const zoom = urlParams.get('zoom');

const initialState: UrlQueryState = {
  selected,
  latlng: latlng ? JSON.parse(latlng) : [32, -83],
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