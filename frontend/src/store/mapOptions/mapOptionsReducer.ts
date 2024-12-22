import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'MAP_OPTIONS';

interface MapOptionsState {
  differentiateOwned: boolean;
  markerOpacity: number;
  markerClustering: number;
  showIcon: boolean;
}

const initialState: MapOptionsState = getItem<MapOptionsState>(LOCAL_STORAGE_NAME, {
  differentiateOwned: true,
  markerOpacity: .8,
  markerClustering: 14,
  showIcon: false,
});

export const mapOptionsSlice = createSlice({
  name: 'mapOptions',
  initialState,
  reducers: {
    setAll(_, action: PayloadAction<MapOptionsState>) {
      const newState = {
        differentiateOwned: action.payload.differentiateOwned,
        markerOpacity: action.payload.markerOpacity,
        markerClustering: action.payload.markerClustering,
        showIcon: action.payload.showIcon,
      };
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    setDifferentiateOwned: (state, action: PayloadAction<boolean>) => {
      state.differentiateOwned = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    },
    setMarkerOpacity: (state, action: PayloadAction<number>) => {
      if (action.payload < 0.2 || action.payload > 1) {
        return;
      }
      state.markerOpacity = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    },
    setMarkerClustering: (state, action: PayloadAction<number>) => {
      state.markerClustering = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    },
    setShowIcon: (state, action: PayloadAction<boolean>) => {
      state.showIcon = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    }
  }
});

export const {
  setAll,
  setDifferentiateOwned,
  setMarkerOpacity,
  setMarkerClustering,
  setShowIcon,
} = mapOptionsSlice.actions;

export default mapOptionsSlice.reducer;