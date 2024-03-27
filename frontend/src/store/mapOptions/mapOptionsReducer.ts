import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'MAP_OPTIONS';

interface MapOptionsState {
  displayAll: boolean;
  displayGnosis: boolean;
  displayRmm: boolean;
  detailedView: boolean;
}

const initialState: MapOptionsState = getItem<MapOptionsState>(LOCAL_STORAGE_NAME, {
  displayAll: false,
  displayGnosis: true,
  displayRmm: true,
  detailedView: true,
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
        detailedView: action.payload.detailedView,
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
    setDetailedView: (state, action: PayloadAction<boolean>) => {
      state.detailedView = action.payload;
      setItem<MapOptionsState>(LOCAL_STORAGE_NAME, state);
    }
  }
});

export const { setAll, setDisplayAll, setDisplayGnosis, setDisplayRmm, setDetailedView } = mapOptionsSlice.actions;

export default mapOptionsSlice.reducer;