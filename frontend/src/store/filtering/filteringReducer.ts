import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'FILTERING';

export type RentStart = 'past' | 'all' | 'future';

interface FilteringState {
  displayAll: boolean;
  displayGnosis: boolean;
  displayRmm: boolean;
  propertyTypes: string[];
  propertyOccupations: {
    min: number;
    max: number;
  };
  propertyYields: {
    min: number;
    max?: number;
  };
  rentStart: RentStart;
}

const initialState: FilteringState = {
  displayAll: true,
  displayGnosis: true,
  displayRmm: true,
  propertyTypes: [],
  propertyOccupations: {
    min: 0,
    max: 100,
  },
  propertyYields: {
    min: 0,
  },
  rentStart: 'all',
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
    setPropertyTypes: (state, action: PayloadAction<string[]>) => {
      state.propertyTypes = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setPropertyOccupations: (state, action: PayloadAction<{ min: number; max: number }>) => {
      state.propertyOccupations = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setPropertyYields: (state, action: PayloadAction<{ min: number; max?: number }>) => {
      state.propertyYields = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setRentStart: (state, action: PayloadAction<RentStart>) => {
      state.rentStart = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
  }
});

export const {
  setDisplayAll,
  setDisplayGnosis,
  setDisplayRmm,
  setPropertyTypes,
  setPropertyOccupations,
  setPropertyYields,
  setRentStart,
} = filteringSlice.actions;

export default filteringSlice.reducer;