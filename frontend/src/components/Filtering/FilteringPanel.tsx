import { useTranslation } from "react-i18next";
import { Drawer, Grid } from "@mantine/core";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { SettingsPanelHeader } from "../Settings/SettingsPanelHeader";
import { FilteringOptions } from "./FilteringOptions";
import { SettingsPanelContent } from "../Settings/SettingsPanelContent";
import { useSmallScreen } from "../../hooks/useSmallScreen";

export function FilteringPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'filtering' });
  
  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position="right"
      size={isSmallScreen ? '100%' : 'md'}>
      <Drawer.Content>
        {
          !isSmallScreen &&
          <Drawer.Header className="flex flex-col !pb-0">
            <SettingsPanelHeader close={close}>
              <FilterAltIcon className="mr-4 col-span-1" />
              { t('filtering') }
            </SettingsPanelHeader>
          </Drawer.Header>
        }
        <Drawer.Body
          className="mb-20 sm:mb-0">
          {
            isSmallScreen &&
            <SettingsPanelHeader close={close}>
              <FilterAltIcon className="mr-4 col-span-1" />
              { t('filtering') }
            </SettingsPanelHeader>
          }
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