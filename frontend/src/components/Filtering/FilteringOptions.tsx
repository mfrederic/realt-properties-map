import { useTranslation } from "react-i18next";
import MapIcon from '@mui/icons-material/Map';
import { SettingsPanelSection } from "../Settings/SettingsPanelSection";
import { PropertyType } from "./PropertyType";
import { PropertyOccupations } from "./PropertyOccupations";
import { PropertyYields } from "./PropertyYields";
import { Grid } from "../Common/Layouts/Grid";
import { RentStart } from "./RentStart";
import { DisplayRmm } from "./DisplayRmm";
import { DisplayGnosis } from "./DisplayGnosis";
import { DisplayAll } from "./DisplayAll";
import { DownloadGpxAction } from "../Settings/AppActions/Actions/DownloadGpxAction";

export function FilteringOptions() {
  const { t: tFiltering } = useTranslation('common', { keyPrefix: 'filtering' });
  
  return (
    <>
      <SettingsPanelSection icon={<MapIcon className="inline-block mr-2" />} label={tFiltering('filteringOptions')}>
        <Grid>
          <Grid.Col span={12}>
            <DisplayRmm />
          </Grid.Col>
          <Grid.Col span={12}>
            <DisplayGnosis />
          </Grid.Col>
          <Grid.Col span={12}>
            <DisplayAll />
          </Grid.Col>
          <Grid.Col span={12}>
            <RentStart />
          </Grid.Col>
          <Grid.Col span={12}>
            <PropertyType />
          </Grid.Col>
          <Grid.Col span={12}>
            <PropertyOccupations />
          </Grid.Col>
          <Grid.Col span={12}>
            <PropertyYields />
          </Grid.Col>
          <Grid.Col span={12}>
            <DownloadGpxAction />
          </Grid.Col>
        </Grid>
      </SettingsPanelSection>
    </>
  )
}