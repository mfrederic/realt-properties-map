import { useTranslation } from "react-i18next";
import MapIcon from '@mui/icons-material/Map';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { Option } from "../Option";
import { setDifferentiateOwned, setShowIcon } from "../../../../store/mapOptions/mapOptionsReducer";
import { SettingsPanelSection } from "../../SettingsPanelSection";
import { selectWalletAddresses } from "../../../../store/settings/settingsSelector";
import { MapMarkerOpacity } from "./MapMarkerOpacity";
import { MapMarkerClustering } from "./MapMarkerClustering";
import { analyticsEvent } from "../../../../services/analytics";
import { Grid } from "../../../Common/Layouts/Grid";

export function MapOptions() {
  const { t } = useTranslation('common', { keyPrefix: 'mapOptions' });
  const dispatch = useAppDispatch();

  const mapOptions = useAppSelector((state) => state.mapOptions);
  const walletAddresses = useAppSelector(selectWalletAddresses);

  function onDifferentiateOwned(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Differentiate Owned',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setDifferentiateOwned(toggle));
  }

  function onShowIcon(toggle: boolean) {
    analyticsEvent({
      category: 'Settings',
      action: 'Show Icon',
      label: toggle ? 'On' : 'Off',
    });
    dispatch(setShowIcon(toggle));
  }

  return (
    <SettingsPanelSection icon={<MapIcon className="inline-block mr-2" />} label={t('mapOptions')}>
      <Grid>
        <Grid.Col span={12}>
          <Option
            id="differentiateOwned"
            label={t('differentiateOwned')}
            checked={mapOptions.differentiateOwned}
            disabled={walletAddresses.length === 0}
            onChange={onDifferentiateOwned} />
        </Grid.Col>
        <Grid.Col span={12}>
          <Option
            id="showIcon"
            label={t('showIcon')}
            checked={mapOptions.showIcon}
            disabled={walletAddresses.length === 0}
            onChange={onShowIcon} />
        </Grid.Col>
        <Grid.Col span={12}>
          <MapMarkerOpacity />
        </Grid.Col>
        <Grid.Col span={12}>
          <MapMarkerClustering />
        </Grid.Col>
      </Grid>
    </SettingsPanelSection>
  )
}
