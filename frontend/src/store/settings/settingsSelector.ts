import { RootState } from "../store";

export const selectWalletAddresses = (state: RootState) => state.settings.addresses;

export const selectedCurrency = (state: RootState) => state.settings.currency;

export const selectedLanguage = (state: RootState) => state.settings.language;
