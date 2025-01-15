import { useCallback, useState } from "react";
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

  const openWalletsPanel = useCallback(() => {
    setToggleWalletsPanel(true);
  }, []);

  const closeWalletsPanel = useCallback(() => {
    setToggleWalletsPanel(false);
  }, []);

  return (
    <>
      <WalletsPanel opened={toggleWalletsPanel} close={closeWalletsPanel} />
      <div className={`flex flex-row align-end justify-end ${props.className}`}>
        <StartTooltip className="!hidden md:!block" onClick={openWalletsPanel} />
        <AppActionsButton opened={false} open={openWalletsPanel} label={t('actions.openWalletsPanel')}>
          <WalletIcon fontSize="large" />
        </AppActionsButton>
      </div>
    </>
  )
}