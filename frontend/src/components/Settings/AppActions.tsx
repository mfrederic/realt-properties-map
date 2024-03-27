import { useDisclosure } from '@mantine/hooks';
import { Flex } from '@mantine/core';
import { AppActionsButton } from './AppActionsButton';
import { StartTooltip } from './StartTooltip';
import { AffixBtn } from '../Common/AffixBtn';
import { MapOptionsPanel } from './Settings/SettingsPanel';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import { WalletsPanel } from './Wallets/WalletsPanel';

export function AppActions() {
  const [walletsOpened, {
    open: openWallets,
    close: closeWallets,
  }] = useDisclosure(false);

  const [mapOptionsOpened, {
    open: openMapOptions,
    close: closeMapOptions,
  }] = useDisclosure(false);

  function onOpenWallets() {
    openWallets();
    closeMapOptions();
  }

  function onOpenMapOptions() {
    openMapOptions();
    closeWallets();
  }

  return (
    <>
      <WalletsPanel opened={walletsOpened} close={closeWallets} />
      <MapOptionsPanel opened={mapOptionsOpened} close={closeMapOptions} />
      {
        !mapOptionsOpened && !walletsOpened &&
        <AffixBtn>
          <Flex align="end" className="ml-2 sm:ml-0">
            <StartTooltip />
            <AppActionsButton opened={false} open={onOpenWallets} label="Wallets panel">
              <WalletIcon fontSize="large" />
            </AppActionsButton>
            <AppActionsButton opened={false} open={onOpenMapOptions} label="Map Options panel">
              <SettingsIcon fontSize="large" />
            </AppActionsButton>
          </Flex>
        </AffixBtn>
      }
    </>
  )
}