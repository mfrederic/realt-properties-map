import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Property } from "../../types/property";

interface MarkerState {
  selected?: Property;
  latlng?: { lat: number, lng: number };
}

const initialState: MarkerState = {
  selected: undefined,
  latlng: undefined
};

export const markerSlice = createSlice({
  name: 'marker',
  initialState,
  reducers: {
    setSelected(state, action: PayloadAction<{
      property: Property,
      latlng: { lat: number, lng: number }
    }>) {
      state.selected = action.payload.property;
      state.latlng = action.payload.latlng;
    },
    clearSelected(state) {
      state.selected = undefined;
      state.latlng = undefined;
    }
  }
});

export const { setSelected, clearSelected } = markerSlice.actions;

export default markerSlice.reducer;