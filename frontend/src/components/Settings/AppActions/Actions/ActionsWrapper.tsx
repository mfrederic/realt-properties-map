import { useState, useRef } from "react";
import { Flex } from "@mantine/core";
import { CopyUrlAction } from "./CopyUrlAction";
import { HelpPanelAction } from "./HelpPanelAction";
import { FilteringPanelAction } from "./FilteringPanelAction";
import { SettingsPanelAction } from "./SettingsPanelAction";
import { WalletPanelAction } from "./WalletPanelAction";
import { SearchBar } from "../../SearchBar";
import { StartTooltip } from "../../StartTooltip";
import { SearchAction } from "./SearchAction";
import { useSmallScreen } from "../../../../hooks/useSmallScreen";

export function ActionsWrapper(props: {
  onOpenWallets: () => void;
  onOpenMapOptions: () => void;
  onOpenFiltering: () => void;
  onOpenHelp: () => void;
}) {
  const isSmallScreen = useSmallScreen();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchBarRef = useRef<{ focus: () => void }>(null);

  const onToggleSearch = () => {
    setIsSearchOpen((prev) => {
      if (!prev) {
        setTimeout(() => searchBarRef.current?.focus(), 0);
      }
      return !prev;
    });
  }

  return (
    <Flex
      direction={isSmallScreen ? 'column' : 'row'}
      align={isSmallScreen ? 'baseline' : 'end'}
      gap="xs"
      className="w-screen md:w-auto pt-2 md:pt-0">
      {
        isSmallScreen
        ? isSearchOpen && <SearchBar ref={searchBarRef} />
        : <SearchBar ref={searchBarRef} />
      }
      { isSmallScreen && <StartTooltip onClick={props.onOpenWallets} /> }
      <Flex
        className="w-full md:w-auto"
        direction="row"
        align="end"
        justify={isSmallScreen ? 'space-around' : 'end'}
        gap="xs">
        <CopyUrlAction />
        <WalletPanelAction onOpenWallets={props.onOpenWallets} />
        <SettingsPanelAction onOpenMapOptions={props.onOpenMapOptions} />
        <FilteringPanelAction onOpenFiltering={props.onOpenFiltering} />
        <HelpPanelAction onOpenHelp={props.onOpenHelp} />
        {
          isSmallScreen && <SearchAction onToggleSearch={onToggleSearch} />
        }
      </Flex>
    </Flex>
  )
}