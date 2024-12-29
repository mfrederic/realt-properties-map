import { useTranslation } from "react-i18next";
import RecommendIcon from '@mui/icons-material/Recommend';
import { AppActionsButton } from "../AppActionsButton";

export function HelpPanelAction(props: {
  onOpenHelp: () => void;
}) {
  const { onOpenHelp } = props;
  const { t } = useTranslation('common');

  return (
    <AppActionsButton opened={false} open={onOpenHelp} label={t('actions.openHelpPanel')} color="lime">
      <RecommendIcon fontSize="large" />
    </AppActionsButton>
  )
}