import { Drawer, Grid } from "@mantine/core";
import { SettingsPanelHeader } from "../Settings/SettingsPanelHeader";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useTranslation } from "react-i18next";
import { FilteringOptions } from "./FilteringOptions";
import { SettingsPanelContent } from "../Settings/SettingsPanelContent";

export function FilteringPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  
  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position="right">
      <Drawer.Content>
        <Drawer.Header className="flex flex-col !pb-0">
          <SettingsPanelHeader close={close}>
            <FilterAltIcon className="mr-4 col-span-1" />
            { t('filtering') }
          </SettingsPanelHeader>
        </Drawer.Header>
        <Drawer.Body
          className="mb-20 sm:mb-0">
          <SettingsPanelContent footer={false}>
            <Grid align="end">
              <Grid.Col span={12}>
                <FilteringOptions />
              </Grid.Col>
            </Grid>
          </SettingsPanelContent>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}