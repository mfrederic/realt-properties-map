import { useTranslation } from "react-i18next";
import WalletIcon from '@mui/icons-material/Wallet';
import { SettingsPanelContent } from "../SettingsPanelContent";
import { Wallets } from "./Wallets";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { AppDrawer } from "../../Common/AppDrawer";
import { Grid } from "../../Common/Layouts/Grid";

export function WalletsPanel({
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
          <WalletIcon className="mr-2 col-span-1" />
          { t('walletSettings') }
        </SettingsPanelHeader>
      }
    >
      <SettingsPanelContent>
        <Grid align="end">
          <Grid.Col span={12}>
            <Wallets />
          </Grid.Col>
        </Grid>
      </SettingsPanelContent>
    </AppDrawer>
  )
}