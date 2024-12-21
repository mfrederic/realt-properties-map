import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'MAP_OPTIONS';

interface MapOptionsState {
  displayAll: boolean;
  displayGnosis: boolean;
  displayRmm: boolean;
  differentiateOwned: boolean;
  markerOpacity: number;
  markerClustering: number;
  showIcon: boolean;
}

const initialState: MapOptionsState = getItem<MapOptionsState>(LOCAL_STORAGE_NAME, {
  displayAll: true,
  displayGnosis: true,
  displayRmm: true,
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
        displayAll: action.payload.displayAll,
        displayGnosis: action.payload.displayGnosis,
        displayRmm: action.payload.displayRmm,
        differentiateOwned: action.payload.differentiateOwned,
        markerOpacity: action.payload.markerOpacity,
        markerClustering: action.payload.markerClustering,
        showIcon: action.payload.showIcon,
      };
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    setDisplayAll: (state, action: PayloadAction<boolean>) => {
      state.displayAll = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    },
    setDisplayGnosis: (state, action: PayloadAction<boolean>) => {
      state.displayGnosis = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    },
    setDisplayRmm: (state, action: PayloadAction<boolean>) => {
      state.displayRmm = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
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
  setDisplayAll,
  setDisplayGnosis,
  setDisplayRmm,
  setDifferentiateOwned,
  setMarkerOpacity,
  setMarkerClustering,
  setShowIcon,
} = mapOptionsSlice.actions;

export default mapOptionsSlice.reducer;