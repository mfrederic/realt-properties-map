import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { RealtProperty } from "../../types/realtProperty";

interface PropertiesState {
  properties: Array<RealtProperty>;
}

const initialState: PropertiesState = {
  properties: [],
};

export const propertiesSlice = createSlice({
  name: 'properties',
  initialState,
  reducers: {
    setProperties(_, action: PayloadAction<Array<RealtProperty>>) {
      return {
        properties: action.payload
      };
    },
  }
});

export const { setProperties } = propertiesSlice.actions;

export const selectProperties = (state: RootState) => state.properties;

export default propertiesSlice.reducer;