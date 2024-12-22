import { RootState } from "../store";

export const selectFiltering = (state: RootState) => state.filtering;

export const selectDisplayAll = (state: RootState) => state.filtering.displayAll;

export const selectDisplayGnosis = (state: RootState) => state.filtering.displayGnosis;

export const selectDisplayRmm = (state: RootState) => state.filtering.displayRmm;