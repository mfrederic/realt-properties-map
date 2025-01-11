import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../services/localStorage";

const LOCAL_STORAGE_NAME = 'FILTERING';

export type RentStart = 'past' | 'all' | 'future';

export type PropertyOccupations = {
  min: number;
  max: number;
};

export type PropertyYields = {
  min: number;
  max?: number;
};

interface FilteringState {
  displayAll: boolean;
  displayGnosis: boolean;
  displayRmm: boolean;
  propertyTypes: string[];
  propertyOccupations: PropertyOccupations;
  propertyYields: PropertyYields;
  rentStart: RentStart;
}

const initialState: FilteringState = getItem<FilteringState>(LOCAL_STORAGE_NAME, {
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
});

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
    setPropertyOccupations: (state, action: PayloadAction<PropertyOccupations>) => {
      state.propertyOccupations = action.payload;
      setItem<FilteringState>(LOCAL_STORAGE_NAME, state);
    },
    setPropertyYields: (state, action: PayloadAction<PropertyYields>) => {
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