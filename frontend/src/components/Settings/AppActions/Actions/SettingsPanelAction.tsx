import { useTranslation } from "react-i18next";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppActionsButton } from "../AppActionsButton";

export function SettingsPanelAction(props: {
  onOpenMapOptions: () => void;
}) {
  const { onOpenMapOptions } = props;
  const { t } = useTranslation('common');

  return (
    <AppActionsButton opened={false} open={onOpenMapOptions} label={t('actions.openSettingsPanel')}>
      <SettingsIcon fontSize="large" />
    </AppActionsButton>
  )
}