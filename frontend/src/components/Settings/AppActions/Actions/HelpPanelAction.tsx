import { useState } from "react";
import { useTranslation } from "react-i18next";
import RecommendIcon from '@mui/icons-material/Recommend';
import { AppActionsButton } from "../AppActionsButton";
import HelpPanel from "../../Help/HelpPanel";

export function HelpPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [helpOpened, setHelpOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  return (
    <>
      <HelpPanel opened={helpOpened} close={() => setHelpOpened(false)} />
      <AppActionsButton opened={false} open={() => setHelpOpened(true)} label={t('actions.openHelpPanel')} color="lime">
        <RecommendIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}