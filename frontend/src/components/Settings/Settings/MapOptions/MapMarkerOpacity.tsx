import { Grid, Slider } from "@mantine/core";
import OpacityIcon from '@mui/icons-material/Opacity';
import { useAppDispatch, useAppSelector } from "../../../../hooks/useInitStore";
import { setMarkerOpacity } from "../../../../store/mapOptions/mapOptionsReducer";
import { selectMarkerOpacity } from "../../../../store/mapOptions/mapOptionsSelector";
import { useTranslation } from "react-i18next";

export function MapMarkerOpacity() {
  const { t } = useTranslation('common');
  const dispatch = useAppDispatch();
  const markerOpacity = useAppSelector(selectMarkerOpacity);

  function onOpacityChange(value: number) {
    dispatch(setMarkerOpacity(value));
  }

  return (
    <Grid className="mt-2">
      <Grid.Col span={12}>
        <h3 className="text-base font-semibold leading-7">
          <OpacityIcon className="inline-block mr-2" />
          { t('settings.markersOpacity') }
        </h3>
      </Grid.Col>
      <Grid.Col span={12} className="mt-4">
        <Slider
          label={(value) => `${value * 100}%`}
          step={.2}
          min={.2}
          max={1}
          defaultValue={markerOpacity}
          thumbLabel={t('settings.mapMarkersOpacity')}
          onChangeEnd={onOpacityChange} />
      </Grid.Col>
    </Grid>
  )
} 