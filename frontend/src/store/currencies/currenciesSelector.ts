import { RootState } from "../store";
import { Currency, CurrencySymbol } from "../../types/currency";
import { createSelector } from "@reduxjs/toolkit";


export const selectCurrencyRates = (
  state: RootState
): Record<Currency, number> => state.currencies.rates

export const selectUserCurrency = createSelector(
  [
    selectCurrencyRates,
    (state: RootState) => state.settings.currency,
  ], (rates, currency) => {
    return {
      rate: rates[currency],
      symbol: CurrencySymbol[currency],
    }
  }
)