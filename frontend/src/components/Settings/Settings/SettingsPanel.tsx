import { useTranslation } from "react-i18next";
import { Space } from "@mantine/core";
import SettingsIcon from '@mui/icons-material/Settings';
import { Grid } from "../../Common/Layouts/Grid";
import { SettingsPanelContent } from "../SettingsPanelContent";
import { MapOptions } from "./MapOptions/MapOptions";
import { ColorSchemeOption } from "./ColorSchemeOption";
import { RefreshDataButton } from "./RefreshDataBtn";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { CurrencySelect } from "./CurrencySelect";
import { LanguageSelect } from "./LanguageSelect";
import { GeneralOptions } from "./GeneralOptions/GeneralOptions";
import { AppDrawer } from "../../Common/AppDrawer";
import { Kbds } from "../../Common/Kbds";

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
          <div className="flex items-center gap-4">
            <SettingsIcon className="mr-2 col-span-1" />
            { t('settings') }
            <Kbds hotkey="mod+alt+S" />
          </div>
        </SettingsPanelHeader>
      }
    >
      <SettingsPanelContent>
        <Grid align="end">
          <Grid.Col span={12}>
            <LanguageSelect />
          </Grid.Col>
          <Grid.Col span={12}>
            <ColorSchemeOption />
          </Grid.Col>
          <Grid.Col span={12}>
            <CurrencySelect />
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