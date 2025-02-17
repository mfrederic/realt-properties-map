import { useTranslation } from "react-i18next";
import { Title } from "@mantine/core";
import OpacityIcon from '@mui/icons-material/Opacity';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { setMarkerOpacity } from "../../../../store/mapOptions/mapOptionsReducer";
import { selectMarkerOpacity } from "../../../../store/mapOptions/mapOptionsSelector";
import { analyticsEvent } from "../../../../services/analytics";
import { useSmallScreen } from "../../../../hooks/useSmallScreen";
import { Slider } from "../../../Common/Inputs/Slider";
import { Grid } from "../../../Common/Layouts/Grid";
import { useCallback } from "react";

export function MapMarkerOpacity() {
  const isSmallScreen = useSmallScreen();
  const mediaQuerySize = isSmallScreen ? 'xl' : 'md';
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const markerOpacity = useAppSelector(selectMarkerOpacity);

  const onOpacityChange = useCallback((value: number) => {
    analyticsEvent({
      category: 'Settings',
      action: 'Set Marker Opacity',
      value,
    });
    dispatch(setMarkerOpacity(value));
  }, [dispatch]);

  const label = useCallback((value: number) => {
    return `${value * 100}%`;
  }, []);

  return (
    <Grid className="mt-2">
      <Grid.Col span={12}>
        <Title order={5} className="text-base font-semibold leading-7">
          <OpacityIcon className="inline-block mr-2" />
          { t('settings.markersOpacity') }
        </Title>
      </Grid.Col>
      <Grid.Col span={12} className="mt-4">
        <Slider
          label={label}
          step={.2}
          min={.2}
          max={1}
          defaultValue={markerOpacity}
          thumbLabel={t('settings.mapMarkersOpacity')}
          onChangeEnd={onOpacityChange}
          size={mediaQuerySize} />
      </Grid.Col>
    </Grid>
  )
} 