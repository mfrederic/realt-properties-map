import { useTranslation } from "react-i18next";
import { Drawer, Grid, Space } from "@mantine/core";
import SettingsIcon from '@mui/icons-material/Settings';
import { SettingsPanelContent } from "../SettingsPanelContent";
import { MapOptions } from "./MapOptions/MapOptions";
import { ColorSchemeOption } from "./ColorSchemeOption";
import { RefreshDataButton } from "./RefreshDataBtn";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";
import { GeneralOptions } from "./GeneralOptions/GeneralOptions";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function MapOptionsPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const isSmallScreen = useSmallScreen(); 
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
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
              <SettingsIcon className="mr-4 col-span-1" />
              { t('settings') }
            </SettingsPanelHeader>
          </Drawer.Header>
        }
        <Drawer.Body
          className="mb-20 sm:mb-0">
          {
            isSmallScreen &&
            <SettingsPanelHeader close={close}>
              <SettingsIcon className="mr-4 col-span-1" />
              { t('settings') }
            </SettingsPanelHeader>
          }
          <SettingsPanelContent>
            <Grid align="end">
              <Grid.Col span={12}>
                <LanguageSelect />
              </Grid.Col>
              <Grid.Col span={{ sm: 12, md: 6 }}>
                <CurrencySelect />
              </Grid.Col>
              <Grid.Col span={{ sm: 12, md: 6 }}>
                <ColorSchemeOption />
              </Grid.Col>
              <Grid.Col span={12}>
                <MapOptions />
              </Grid.Col>
              <Grid.Col span={12}>
                <GeneralOptions />
              </Grid.Col>
              <Grid.Col span={12}>
                <Space h="xl" />
                <RefreshDataButton />
                <Space h="xl" />
              </Grid.Col>
            </Grid>
          </SettingsPanelContent>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}