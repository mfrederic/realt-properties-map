import { useTranslation } from "react-i18next";
import { useAppSelector } from "../../hooks/useInitStore";
import { selectFiltering } from "../../store/filtering/filteringSelector";
import { Option } from "../Settings/Settings/Option";
import { selectWalletAddresses } from "../../store/settings/settingsSelector";
import { useAppDispatch } from "../../hooks/useInitStore";
import { analyticsEvent } from "../../services/analytics";
import { setDisplayAll } from "../../store/filtering/filteringReducer";
import { useEffect } from "react";
import { useSmallScreen } from "../../hooks/useSmallScreen";
import { Kbds } from "../Common/Kbds";

export function DisplayAll() {
  const { t: tMapOptions } = useTranslation('common', { keyPrefix: 'mapOptions' });
  const isSmallScreen = useSmallScreen();
  const dispatch = useAppDispatch();
  const filteringOptions = useAppSelector(selectFiltering);
  const walletAddresses = useAppSelector(selectWalletAddresses);
  
  useEffect(() => {
    if (walletAddresses.length === 0) {
      dispatch(setDisplayAll(true));
    }
  }, []);
  
  function onDisplayAll(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display All',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayAll(toggle));
  }
  
  return (
    <Option
      id="all"
      label={tMapOptions('displayAll')}
      checked={filteringOptions.displayAll}
      disabled={walletAddresses.length === 0}
      rightSection={
        isSmallScreen ? null : (
          <Kbds hotkey="mod+O" />
        )
      }
      onChange={onDisplayAll} />
  )
}