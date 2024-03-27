import { useSelector } from 'react-redux'
import { selectUserCurrency } from '../store/currencies/currenciesSelector'

export const useCurrencyValue = (value: number) => {
  const { rate, symbol } = useSelector(selectUserCurrency);
  return `${(value * rate).toFixed(2)} ${symbol}`;
}
