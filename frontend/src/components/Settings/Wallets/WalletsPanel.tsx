import { Drawer, Grid } from "@mantine/core";
import WalletIcon from '@mui/icons-material/Wallet';
import { SettingsPanelContent } from "../SettingsPanelContent";
import { Wallets } from "./Wallets";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { useTranslation } from "react-i18next";

export function WalletsPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  return (
    <Drawer.Root opened={opened} onClose={close} position="right">
      <Drawer.Content>
        <Drawer.Header className="flex flex-col !pb-0">
          <SettingsPanelHeader close={close}>
            <WalletIcon className="mr-4 col-span-1" />
            { t('walletSettings') }
          </SettingsPanelHeader>
        </Drawer.Header>
        <Drawer.Body
          className="mb-20 sm:mb-0">
          <SettingsPanelContent>
            <Grid align="end">
              <Grid.Col span={12}>
                <Wallets />
              </Grid.Col>
            </Grid>
          </SettingsPanelContent>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}