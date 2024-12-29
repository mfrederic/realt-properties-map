import { useTranslation } from "react-i18next";
import { Drawer, Grid } from "@mantine/core";
import WalletIcon from '@mui/icons-material/Wallet';
import { SettingsPanelContent } from "../SettingsPanelContent";
import { Wallets } from "./Wallets";
import { SettingsPanelHeader } from "../SettingsPanelHeader";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function WalletsPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const isSmallScreen = useSmallScreen();
  
  return (
    <Drawer.Root opened={opened} onClose={close} position="right" size={isSmallScreen ? '100%' : 'md'}>
      <Drawer.Content>
        {
          !isSmallScreen &&
          <Drawer.Header className="flex flex-col !pb-0">
            <SettingsPanelHeader close={close}>
              <WalletIcon className="mr-4 col-span-1" />
              { t('walletSettings') }
            </SettingsPanelHeader>
          </Drawer.Header>
        }
        <Drawer.Body
          className="mb-20 sm:mb-0">
          <SettingsPanelHeader close={close}>
            <WalletIcon className="mr-4 col-span-1" />
            { t('walletSettings') }
          </SettingsPanelHeader>
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