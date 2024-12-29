import { useEffect, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Affix, Paper } from '@mantine/core';
import { MapOptionsPanel } from '../Settings/SettingsPanel';
import { WalletsPanel } from '../Wallets/WalletsPanel';
import { FilteringPanel } from '../../Filtering/FilteringPanel';
import HelpPanel from '../Help/HelpPanel';
import { ActionsWrapper } from './Actions/ActionsWrapper';
import { useSmallScreen } from '../../../hooks/useSmallScreen';

export function AppActions() {
  const isSmallScreen = useSmallScreen();

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

  function setPositionWithMediaQuery() {
    return isSmallScreen ? { bottom: 0, right: 0 } : { top: 20, right: 20 };
  }

  const [position, setPosition] = useState(setPositionWithMediaQuery());
  useEffect(() => {
    setPosition(setPositionWithMediaQuery());
  }, [isSmallScreen]);

  return (
    <>
      <WalletsPanel opened={walletsOpened} close={closeWallets} />
      <MapOptionsPanel opened={mapOptionsOpened} close={closeMapOptions} />
      <FilteringPanel opened={filteringPanelOpened} close={closeFilteringPanel} />
      <HelpPanel opened={helpOpened} close={closeHelp} />
      {
      !mapOptionsOpened && !walletsOpened && !helpOpened && !filteringPanelOpened &&
        <Affix position={position}>
          {
            isSmallScreen
              ? <Paper radius={0} className=''>
                  <ActionsWrapper
                    onOpenWallets={onOpenWallets}
                    onOpenMapOptions={onOpenMapOptions}
                    onOpenFiltering={onOpenFiltering}
                    onOpenHelp={onOpenHelp}
                  />
                </Paper>
              : <ActionsWrapper
                onOpenWallets={onOpenWallets}
                onOpenMapOptions={onOpenMapOptions}
                onOpenFiltering={onOpenFiltering}
                onOpenHelp={onOpenHelp}
              />
          }
        </Affix>
      }
    </>
  )
}