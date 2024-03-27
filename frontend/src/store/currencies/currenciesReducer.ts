import { createSlice } from '@reduxjs/toolkit';
import { Currency } from '../../types/currency';
import { AppDispatch, RootState } from '../store';
import { getRates } from '../../services/currencies';

interface CurrenciesInitialStateType {
  rates: Record<Currency, number>
  isLoading: boolean
}

const currenciesInitialState: CurrenciesInitialStateType = {
  rates: {
    [Currency.USD]: 1,
    [Currency.EUR]: 1,
    [Currency.CHF]: 1,
    [Currency.XDAI]: 1,
  },
  isLoading: false,
}

export function fetchCurrenciesRates() {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const state = getState()
    const isLoading = state.currencies.isLoading

    if (isLoading) {
      return
    }

    dispatch(currenciesIsLoading(true));
    try {
      const { ChfUsd, EurUsd, XdaiUsd } = await getRates();

      dispatch(
        currenciesChanged({
          [Currency.USD]: 1,
          [Currency.EUR]: EurUsd,
          [Currency.CHF]: ChfUsd,
          [Currency.XDAI]: XdaiUsd,
        })
      );
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(currenciesIsLoading(false));
    }
  }
}

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState: currenciesInitialState,
  reducers: {
    currenciesChanged: (state, action) => {
      state.rates = action.payload
    },
    currenciesIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
  },
})

export const { currenciesChanged, currenciesIsLoading } = currenciesSlice.actions;

export default currenciesSlice.reducer;