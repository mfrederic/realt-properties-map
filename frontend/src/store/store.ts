// store.ts
import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './wallet/walletReducer';
import mapOptionsReducer from './mapOptions/mapOptionsReducer';
import propertiesReducer from './properties/propertiesReducer';

const store = configureStore({
  reducer: {
    wallets: walletReducer,
    mapOptions: mapOptionsReducer,
    properties: propertiesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch