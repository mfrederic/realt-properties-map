import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { Currency } from "../../../types/currency";
import { selectedCurrency } from "../../../store/settings/settingsSelector";
import { setCurrency } from "../../../store/settings/settingsReducer";
import { useTranslation } from "react-i18next";
import { analyticsEvent } from "../../../services/analytics";
import { Select } from "../../Common/Inputs/Select";
import { useSmallScreen } from '../../../hooks/useSmallScreen';
import { Kbds } from '../../Common/Kbds';

export function CurrencySelect() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const isSmallScreen = useSmallScreen();

  const dispatch = useAppDispatch();
  const userCurrency = useAppSelector(selectedCurrency);

  function setUserCurrency(currency: string | null) {
    const currencyEnum = currency as Currency;
    analyticsEvent({
      category: 'Settings',
      action: 'Set Currency',
      label: currencyEnum,
    });
    dispatch(setCurrency(currencyEnum));
  }

  return (
    <Select
      allowDeselect={false}
      className="w-full flex-1"
      label={t('currency')}
      p={5}
      value={userCurrency}
      onChange={setUserCurrency}
      data={[
        { value: Currency.USD, label: t('usd') },
        { value: Currency.EUR, label: t('eur') },
        { value: Currency.CHF, label: t('chf') },
      ]}
      leftSection={
        <CurrencyExchangeIcon />
      }
      rightSection={
        isSmallScreen ? null : (
          <Kbds hotkey="mod+M" />
        )
      }
      rightSectionWidth={isSmallScreen ? undefined : 100}
    />
  )
}