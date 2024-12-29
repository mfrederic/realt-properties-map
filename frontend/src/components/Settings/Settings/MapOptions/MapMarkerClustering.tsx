import { useTranslation } from "react-i18next";
import { Grid, Slider } from "@mantine/core";
import OpacityIcon from '@mui/icons-material/Opacity';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { setMarkerClustering } from "../../../../store/mapOptions/mapOptionsReducer";
import { selectMarkerClustering } from "../../../../store/mapOptions/mapOptionsSelector";
import { analyticsEvent } from "../../../../services/analytics";
import { useSmallScreen } from "../../../../hooks/useSmallScreen";

export function MapMarkerClustering() {
  const isSmallScreen = useSmallScreen();
  const mediaQuerySize = isSmallScreen ? 'xl' : 'md';
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const markerClustering = useAppSelector(selectMarkerClustering);

  function onClusteringChange(value: number) {
    analyticsEvent({
      category: 'Settings',
      action: 'Set Marker Clustering',
      value,
    });
    dispatch(setMarkerClustering(value));
  }

  return (
    <Grid className="mt-2">
      <Grid.Col span={12}>
        <h3 className="text-base font-semibold leading-7">
          <OpacityIcon className="inline-block mr-2" />
          { t('settings.markersClustering') }
        </h3>
      </Grid.Col>
      <Grid.Col span={12} className="mt-4">
        <Slider
          label={(value) => `zoom: ${value}`}
          step={1}
          min={10}
          max={18}
          defaultValue={markerClustering}
          thumbLabel={t('settings.mapMarkersClustering')}
          onChangeEnd={onClusteringChange}
          size={mediaQuerySize}
          marks={[
            { value: 10, label: '10' },
            { value: 14, label: `14 (${t('extra.default')})` },
            { value: 18, label: '18' },
          ]}/>
      </Grid.Col>
    </Grid>
  )
} 