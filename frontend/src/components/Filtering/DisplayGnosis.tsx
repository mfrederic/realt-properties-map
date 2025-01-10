import { useTranslation } from "react-i18next";
import { Option } from "../Settings/Settings/Option";
import { selectFiltering } from "../../store/filtering/filteringSelector";
import { selectWalletAddresses } from "../../store/settings/settingsSelector";
import { useAppSelector } from "../../hooks/useInitStore";
import { analyticsEvent } from "../../services/analytics";
import { setDisplayGnosis } from "../../store/filtering/filteringReducer";
import { useAppDispatch } from "../../hooks/useInitStore";

export function DisplayGnosis() {
  const { t: tMapOptions } = useTranslation('common', { keyPrefix: 'mapOptions' });

  const dispatch = useAppDispatch();
  const filteringOptions = useAppSelector(selectFiltering);
  const walletAddresses = useAppSelector(selectWalletAddresses);

  function onDisplayGnosis(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display Gnosis',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayGnosis(toggle));
  }

  return (
    <Option
      id="gnosis"
      label={tMapOptions('displayGnosis')}
      checked={filteringOptions.displayGnosis}
      disabled={walletAddresses.length === 0}
      onChange={(e) => onDisplayGnosis(e)} />
  )
}