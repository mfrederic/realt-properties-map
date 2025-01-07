import { useState } from "react";
import { useTranslation } from "react-i18next";
import WalletIcon from '@mui/icons-material/Wallet';
import { StartTooltip } from "../../StartTooltip";
import { AppActionsButton } from "../AppActionsButton";
import { WalletsPanel } from "../../Wallets/WalletsPanel";

export function WalletPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const { t } = useTranslation('common');
  const [toggleWalletsPanel, setToggleWalletsPanel] = useState(props.isOpened || false);
  return (
    <>
      <WalletsPanel opened={toggleWalletsPanel} close={() => setToggleWalletsPanel(false)} />
      <div className={`flex flex-row align-end justify-end ${props.className}`}>
        <StartTooltip className="!hidden md:!block" onClick={() => setToggleWalletsPanel(true)} />
        <AppActionsButton opened={false} open={() => setToggleWalletsPanel(true)} label={t('actions.openWalletsPanel')}>
          <WalletIcon fontSize="large" />
        </AppActionsButton>
      </div>
    </>
  )
}