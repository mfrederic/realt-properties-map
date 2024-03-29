import { Grid, Slider } from "@mantine/core";
import OpacityIcon from '@mui/icons-material/Opacity';
import { useAppDispatch, useAppSelector } from "../../../hooks/useInitStore";
import { setMarkerOpacity } from "../../../store/mapOptions/mapOptionsReducer";
import { selectMarkerOpacity } from "../../../store/mapOptions/mapOptionsSelector";

export function MapMarkerOpacity() {
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
          Markers opacity
        </h3>
      </Grid.Col>
      <Grid.Col span={12} className="mt-4">
        <Slider
            step={.2}
            min={.2}
            max={1}
            defaultValue={markerOpacity}
            thumbLabel="Map markers opacity"
            onChangeEnd={onOpacityChange}
          />
      </Grid.Col>
    </Grid>
  )
} 