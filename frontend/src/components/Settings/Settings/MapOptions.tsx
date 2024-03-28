import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MapIcon from '@mui/icons-material/Map';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { MapOption } from "./MapOption";
import { setDisplayAll, setDisplayGnosis, setDisplayRmm } from "../../../store/mapOptions/mapOptionsReducer";
import { SettingsPanelSection } from "../SettingsPanelSection";
import { selectWalletAddresses } from "../../../store/settings/settingsSelector";
import { MapMarkerOpacity } from "./MapMarkerOpacity";

export function MapOptions() {
  const { t } = useTranslation('common', { keyPrefix: 'mapOptions' });
  const dispatch = useAppDispatch();

  const mapOptions = useAppSelector((state) => state.mapOptions);
  const walletAddresses = useAppSelector(selectWalletAddresses);

  useEffect(() => {
    if (walletAddresses.length === 0) {
      dispatch(setDisplayAll(true));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onDisplayRmm(toggle: boolean) {
    dispatch(setDisplayRmm(toggle));
  }

  function onDisplayGnosis(toggle: boolean) {
    dispatch(setDisplayGnosis(toggle));
  }

  function onDisplayAll(toggle: boolean) {
    dispatch(setDisplayAll(toggle));
  }

  return (
    <SettingsPanelSection icon={<MapIcon className="inline-block mr-2" />} label={t('mapOptions')}>
      <MapOption
        id="rmm"
        label={t('displayRmm')}
        checked={mapOptions.displayRmm}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayRmm(e)} />
      <MapOption
        id="gnosis"
        label={t('displayGnosis')}
        checked={mapOptions.displayGnosis}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayGnosis(e)} />
      <MapOption
        id="all"
        label={t('displayAll')}
        checked={mapOptions.displayAll}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayAll(e)} />
      <MapMarkerOpacity />
    </SettingsPanelSection>
  )
}
