import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { fetchRealtokens } from "../store/realtokens/realtokensReducer";
import { useEffect } from "react";
import { fetchWallets } from "../store/wallet/walletReducer";
import { selectWalletAddresses, selectedLanguage } from "../store/settings/settingsSelector";
import { fetchCurrenciesRates } from "../store/currencies/currenciesReducer";
import { useTranslation } from "react-i18next";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

export default function useInitStore() {
  const { i18n, t } = useTranslation('common', { keyPrefix: 'notifications' });
  const dispatch = useAppDispatch();

  const addressList = useAppSelector(selectWalletAddresses);
  const language = useAppSelector(selectedLanguage);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [i18n, language]);

  useEffect(() => {
    dispatch(fetchRealtokens(t));
    dispatch(fetchCurrenciesRates());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (addressList.length) {
      dispatch(fetchWallets(t))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, addressList])
}