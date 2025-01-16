import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTranslation } from "../../hooks/useTranslation";
import { SettingsPanelHeader } from "../Settings/SettingsPanelHeader";
import { FilteringOptions } from "./FilteringOptions";
import { SettingsPanelContent } from "../Settings/SettingsPanelContent";
import { AppDrawer } from "../Common/AppDrawer";
import { Grid } from "../Common/Layouts/Grid";
import { Kbds } from '../Common/Kbds';

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
          <div className="flex items-center gap-4">
            <FilterAltIcon className="mr-2 col-span-1" />
            { t('filtering') }
            <Kbds hotkey="mod+alt+F" />
          </div>
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