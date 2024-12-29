import { Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import WalletIcon from '@mui/icons-material/Wallet';
import { StartTooltip } from "../../StartTooltip";
import { AppActionsButton } from "../AppActionsButton";
import { useSmallScreen } from "../../../../hooks/useSmallScreen";

export function WalletPanelAction(props: {
  onOpenWallets: () => void;
}) {
  const isSmallScreen = useSmallScreen();
  const { onOpenWallets } = props;
  const { t } = useTranslation('common');

  return (
    <Flex direction="row" align="end" justify="end">
      { !isSmallScreen && <StartTooltip onClick={onOpenWallets} /> }
      <AppActionsButton opened={false} open={onOpenWallets} label={t('actions.openWalletsPanel')}>
        <WalletIcon fontSize="large" />
      </AppActionsButton>
    </Flex>
  )
}