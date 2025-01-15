import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import RecommendIcon from '@mui/icons-material/Recommend';
import { AppActionsButton } from "../AppActionsButton";
import HelpPanel from "../../Help/HelpPanel";

export function HelpPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [helpOpened, setHelpOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  const openHelpPanel = useCallback(() => {
    setHelpOpened(true);
  }, []);

  const closeHelpPanel = useCallback(() => {
    setHelpOpened(false);
  }, []);
  
  return (
    <>
      <HelpPanel opened={helpOpened} close={closeHelpPanel} />
      <AppActionsButton opened={false} open={openHelpPanel} label={t('actions.openHelpPanel')} color="lime">
        <RecommendIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}