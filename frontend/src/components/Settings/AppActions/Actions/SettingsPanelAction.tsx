import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import SettingsIcon from '@mui/icons-material/Settings';
import { AppActionsButton } from "../AppActionsButton";
import { MapOptionsPanel } from "../../Settings/SettingsPanel";
import { useHotkeys } from "@mantine/hooks";

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

  function toggleMapOptionsPanel() {
    if (!mapOptionsOpened) {
      openMapOptionsPanel();
    } else {
      closeMapOptionsPanel();
    }
  }

  useHotkeys([['mod+alt+S', toggleMapOptionsPanel]]);

  return (
    <>
      <MapOptionsPanel opened={mapOptionsOpened} close={closeMapOptionsPanel} />
      <AppActionsButton opened={false} open={openMapOptionsPanel} label={t('actions.openSettingsPanel')}>
        <SettingsIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}