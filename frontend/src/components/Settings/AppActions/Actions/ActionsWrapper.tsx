import { useState, useCallback } from "react";
import { CopyUrlAction } from "./CopyUrlAction";
import { HelpPanelAction } from "./HelpPanelAction";
import { FilteringPanelAction } from "./FilteringPanelAction";
import { SettingsPanelAction } from "./SettingsPanelAction";
import { WalletPanelAction } from "./WalletPanelAction";
import { StartTooltip } from "../../StartTooltip";
import { SearchAction } from "./SearchAction";
import { SearchBarWrapper } from "../../SearchBar/SearchBarWrapper";

export function ActionsWrapper() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isWalletsOpen, setIsWalletsOpen] = useState(false);
  
  const setWalletsOpen = useCallback(() => {
    setIsWalletsOpen(true);
  }, []);

  const setSearchOpen = useCallback(() => {
    setIsSearchOpen((prev) => !prev);
  }, []);

  return (
    <div className="flex flex-col md:flex-row w-screen align-end md:align-baseline md:w-auto pt-2 md:pt-0 gap-2">
      <SearchBarWrapper isSearchOpen={isSearchOpen} />
      <StartTooltip className="!block md:!hidden" onClick={setWalletsOpen}/>
      <div className="flex flex-row w-full md:w-auto align-end justify-around md:justify-end gap-2">
        <CopyUrlAction />
        <WalletPanelAction isOpened={isWalletsOpen} />
        <SettingsPanelAction />
        <FilteringPanelAction />
        <HelpPanelAction />
        <SearchAction onToggleSearch={setSearchOpen} className="!block md:!hidden"/>
      </div>
    </div>
  )
}