import { RootState } from "../store";

export const selectRealtokens = (state: RootState) => state.realtokens;

export const selectRealtokensList = (state: RootState) => selectRealtokens(state).realtokens;

export const selectRealtokensLoading = (state: RootState) => selectRealtokens(state).isLoading;