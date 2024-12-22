import { useDisclosure } from '@mantine/hooks';
import { Container, Flex, Grid, SimpleGrid } from '@mantine/core';
import { AppActionsButton } from './AppActionsButton';
import { StartTooltip } from './StartTooltip';
import { AffixBtn } from '../Common/AffixBtn';
import { MapOptionsPanel } from './Settings/SettingsPanel';
import { WalletsPanel } from './Wallets/WalletsPanel';
import WalletIcon from '@mui/icons-material/Wallet';
import SettingsIcon from '@mui/icons-material/Settings';
import LinkIcon from '@mui/icons-material/Link';
import CheckIcon from '@mui/icons-material/Check';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import RecommendIcon from '@mui/icons-material/Recommend';
import { useCopyUrl } from '../../hooks/useCopyUrl';
import { useTranslation } from 'react-i18next';
import { SearchBar } from './SearchBar';
import HelpPanel from './Help/HelpPanel';
import { FilteringPanel } from '../Filtering/FilteringPanel';

export function AppActions() {
  const { t } = useTranslation('common');
  const { copied, onCopyUrl } = useCopyUrl();

  const [walletsOpened, {
    open: openWallets,
    close: closeWallets,
  }] = useDisclosure(false);

  const [mapOptionsOpened, {
    open: openMapOptions,
    close: closeMapOptions,
  }] = useDisclosure(false);

  const [helpOpened, {
    open: openHelp,
    close: closeHelp,
  }] = useDisclosure(false);

  const [filteringPanelOpened, {
    open: openFilteringPanel,
    close: closeFilteringPanel,
  }] = useDisclosure(false);

  function onOpenWallets() {
    openWallets();
    closeMapOptions();
  }

  function onOpenMapOptions() {
    openMapOptions();
    closeWallets();
  }

  function onOpenFiltering() {
    openFilteringPanel();
    closeMapOptions();
  }

  function onOpenHelp() {
    openHelp();
    closeMapOptions();
  }

  return (
    <>
      <WalletsPanel opened={walletsOpened} close={closeWallets} />
      <MapOptionsPanel opened={mapOptionsOpened} close={closeMapOptions} />
      <FilteringPanel opened={filteringPanelOpened} close={closeFilteringPanel} />
      <HelpPanel opened={helpOpened} close={closeHelp} />
      {
      !mapOptionsOpened && !walletsOpened && !helpOpened && !filteringPanelOpened &&
        <AffixBtn>
          <Flex align="end" className="ml-2 sm:ml-0">
            <SearchBar />
            <Flex direction={{ base: 'column', sm: 'row' }} align="end" gap="xs">
              <Flex gap="xs">
                <AppActionsButton opened={false} open={onCopyUrl} label={t('actions.copyUrl')} color={copied ? 'teal' : ''}>
                  {
                    !copied
                      ? <LinkIcon fontSize="large" />
                      : <CheckIcon fontSize="large" />
                  }
                </AppActionsButton>
                <Flex direction="column">
                  <StartTooltip />
                  <AppActionsButton opened={false} open={onOpenWallets} label={t('actions.openWalletsPanel')}>
                    <WalletIcon fontSize="large" />
                  </AppActionsButton>
                </Flex>
              </Flex>
              <Flex gap="xs">
                <AppActionsButton opened={false} open={onOpenMapOptions} label={t('actions.openSettingsPanel')}>
                  <SettingsIcon fontSize="large" />
                </AppActionsButton>
                <AppActionsButton opened={false} open={onOpenFiltering} label={t('actions.openFilteringPanel')}>
                  <FilterAltIcon fontSize="large" />
                </AppActionsButton>
                <AppActionsButton opened={false} open={onOpenHelp} label={t('actions.openHelpPanel')} color="lime">
                  <RecommendIcon fontSize="large" />
                </AppActionsButton>
              </Flex>
            </Flex>
          </Flex>
        </AffixBtn>
      }
    </>
  )
}