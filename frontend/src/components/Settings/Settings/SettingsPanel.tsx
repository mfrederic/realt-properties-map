import { useTranslation } from "react-i18next";
import { Grid, Space } from "@mantine/core";
import SettingsIcon from '@mui/icons-material/Settings';
import { SettingsPanelContent } from "../SettingsPanelContent";
import { MapOptions } from "./MapOptions/MapOptions";
import { ColorSchemeOption } from "./ColorSchemeOption";
import { RefreshDataButton } from "./RefreshDataBtn";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";
import { GeneralOptions } from "./GeneralOptions/GeneralOptions";
import { AppDrawer } from "../../Common/AppDrawer";

export function MapOptionsPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });

  return (
    <AppDrawer
      opened={opened}
      close={close}
      header={
        <SettingsPanelHeader close={close}>
          <SettingsIcon className="mr-4 col-span-1" />
          { t('settings') }
        </SettingsPanelHeader>
      }
    >
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
    </AppDrawer>
  )
}