import { useTranslation } from "react-i18next";
import { Grid } from "@mantine/core";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { SettingsPanelHeader } from "../Settings/SettingsPanelHeader";
import { FilteringOptions } from "./FilteringOptions";
import { SettingsPanelContent } from "../Settings/SettingsPanelContent";
import { AppDrawer } from "../Common/AppDrawer";

export function FilteringPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  
  return (
    <AppDrawer
      opened={opened}
      close={close}
      header={
        <SettingsPanelHeader close={close}>
          <FilterAltIcon className="mr-4 col-span-1" />
          { t('filtering') }
        </SettingsPanelHeader>
      }
    >
      <SettingsPanelContent>
        <Grid align="end">
          <Grid.Col span={12}>
            <FilteringOptions />
          </Grid.Col>
        </Grid>
      </SettingsPanelContent>
    </AppDrawer>
  )
}