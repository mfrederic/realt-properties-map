import { Select } from "@mantine/core";
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { Currency } from "../../../types/currency";
import { selectedCurrency } from "../../../store/settings/settingsSelector";
import { setCurrency } from "../../../store/settings/settingsReducer";
import { useTranslation } from "react-i18next";

export function CurrencySelect() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const dispatch = useAppDispatch();
  const userCurrency = useAppSelector(selectedCurrency);

  function setUserCurrency(currency: Currency) {
    dispatch(setCurrency(currency));
  }

  return (
    <Select
      allowDeselect={false}
      className="w-full"
      label={t('currency')}
      p={5}
      value={userCurrency}
      onChange={(value) => setUserCurrency(value as Currency)}
      data={[
        { value: Currency.USD, label: t('usd') },
        { value: Currency.EUR, label: t('eur') },
        { value: Currency.CHF, label: t('chf') },
      ]}
      leftSection={
        <CurrencyExchangeIcon />
      }
    />
  )
}