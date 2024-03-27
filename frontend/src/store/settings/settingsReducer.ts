import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItem, setItem } from "../../services/localStorage";
import { Currency } from "../../types/currency";
import { Language } from "../../types/language";

const LOCAL_STORAGE_NAME = 'SETTINGS';

export interface SettingsState {
  addresses: string[];
  currency: Currency;
  language: Language;
}

const initialState: SettingsState = getItem<SettingsState>(LOCAL_STORAGE_NAME, {
  addresses: [],
  currency: Currency.USD,
  language: Language.EN,
});

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setAddresses: (state, action: PayloadAction<string[]>) => {
      state.addresses = action.payload;
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    },
    addAddress: (state, action: PayloadAction<string>) => {
      state.addresses.push(action.payload);
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    },
    updateAddress: (state, action: PayloadAction<{ oldAddress: string, newAddress: string }>) => {
      const index = state.addresses.findIndex((address) => address === action.payload.oldAddress);
      if (index !== -1) {
        state.addresses[index] = action.payload.newAddress;
      }
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    },
    removeAddress: (state, action: PayloadAction<string>) => {
      const index = state.addresses.findIndex((address) => address === action.payload);
      if (index !== -1) {
        state.addresses.splice(index, 1);
      }
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    },
    setCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    },
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.language = action.payload;
      setItem<SettingsState>(LOCAL_STORAGE_NAME, state);
    }
  }
});

export const {
  setAddresses,
  addAddress,
  updateAddress,
  removeAddress,
  setCurrency,
  setLanguage,
} = settingsSlice.actions;

export default settingsSlice.reducer;