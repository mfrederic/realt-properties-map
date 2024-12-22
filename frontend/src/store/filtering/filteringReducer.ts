import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'FILTERING';

interface FilteringState {
  displayAll: boolean;
  displayGnosis: boolean;
  displayRmm: boolean;
}

const initialState: FilteringState = {
  displayAll: true,
  displayGnosis: true,
  displayRmm: true,
};

export const filteringSlice = createSlice({
  name: 'filtering',
  initialState,
  reducers: {
    setDisplayAll: (state, action: PayloadAction<boolean>) => {
      state.displayAll = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setDisplayGnosis: (state, action: PayloadAction<boolean>) => {
      state.displayGnosis = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setDisplayRmm: (state, action: PayloadAction<boolean>) => {
      state.displayRmm = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
  }
});

export const {
  setDisplayAll,
  setDisplayGnosis,
  setDisplayRmm,
} = filteringSlice.actions;

export default filteringSlice.reducer;