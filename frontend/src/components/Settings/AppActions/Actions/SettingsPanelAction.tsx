import { useState } from "react";
import { useTranslation } from "react-i18next";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppActionsButton } from "../AppActionsButton";
import { MapOptionsPanel } from "../../Settings/SettingsPanel";

export function SettingsPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [mapOptionsOpened, setMapOptionsOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  return (
    <>
      <MapOptionsPanel opened={mapOptionsOpened} close={() => setMapOptionsOpened(false)} />
      <AppActionsButton opened={false} open={() => setMapOptionsOpened(true)} label={t('actions.openSettingsPanel')}>
        <SettingsIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}