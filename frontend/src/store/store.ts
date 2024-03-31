import { combineReducers, configureStore } from '@reduxjs/toolkit';
import walletReducer from './wallet/walletReducer';
import mapOptionsReducer from './mapOptions/mapOptionsReducer';
import realTokensReducer from './realtokens/realtokensReducer';
import settingsReducer from './settings/settingsReducer';
import markerReducer from './marker/markerReducer';
import currenciesReducer from './currencies/currenciesReducer';
import urlQueryReducer from './urlQuery/urlQuery.reducer';

const rootReducer = combineReducers({
  settings: settingsReducer,
  wallets: walletReducer,
  mapOptions: mapOptionsReducer,
  realtokens: realTokensReducer,
  marker: markerReducer,
  currencies: currenciesReducer,
  urlQuery: urlQueryReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch