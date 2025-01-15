import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppActionsButton } from "../AppActionsButton";
import { MapOptionsPanel } from "../../Settings/SettingsPanel";

export function SettingsPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [mapOptionsOpened, setMapOptionsOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  const openMapOptionsPanel = useCallback(() => {
    setMapOptionsOpened(true);
  }, []);

  const closeMapOptionsPanel = useCallback(() => {
    setMapOptionsOpened(false);
  }, []);

  return (
    <>
      <MapOptionsPanel opened={mapOptionsOpened} close={closeMapOptionsPanel} />
      <AppActionsButton opened={false} open={openMapOptionsPanel} label={t('actions.openSettingsPanel')}>
        <SettingsIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}