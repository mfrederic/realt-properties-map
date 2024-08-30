import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import MapIcon from '@mui/icons-material/Map';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { Option } from "../Option";
import { setDifferentiateOwned, setDisplayAll, setDisplayGnosis, setDisplayRmm } from "../../../../store/mapOptions/mapOptionsReducer";
import { SettingsPanelSection } from "../../SettingsPanelSection";
import { selectWalletAddresses } from "../../../../store/settings/settingsSelector";
import { MapMarkerOpacity } from "./MapMarkerOpacity";
import { MapMarkerClustering } from "./MapMarkerClustering";
import { analyticsEvent } from "../../../../services/analytics";

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
    analyticsEvent({
      category: 'Settings',
      action: 'Display RMM',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayRmm(toggle));
  }

  function onDisplayGnosis(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display Gnosis',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayGnosis(toggle));
  }

  function onDisplayAll(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Display All',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDisplayAll(toggle));
  }

  function onDifferentiateOwned(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Differentiate Owned',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDifferentiateOwned(toggle));
  }

  return (
    <SettingsPanelSection icon={<MapIcon className="inline-block mr-2" />} label={t('mapOptions')}>
      <Option
        id="rmm"
        label={t('displayRmm')}
        checked={mapOptions.displayRmm}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayRmm(e)} />
      <Option
        id="gnosis"
        label={t('displayGnosis')}
        checked={mapOptions.displayGnosis}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayGnosis(e)} />
      <Option
        id="all"
        label={t('displayAll')}
        checked={mapOptions.displayAll}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDisplayAll(e)} />
      <Option
        id="differentiateOwned"
        label={t('differentiateOwned')}
        checked={mapOptions.differentiateOwned}
        disabled={walletAddresses.length === 0}
        onChange={(e) => onDifferentiateOwned(e)} />
      <MapMarkerOpacity />
      <MapMarkerClustering />
    </SettingsPanelSection>
  )
}
