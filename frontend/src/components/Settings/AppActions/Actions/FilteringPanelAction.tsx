import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AppActionsButton } from "../AppActionsButton";
import { FilteringPanel } from "../../../Filtering/FilteringPanel";
import { useHotkeys } from "@mantine/hooks";

export function FilteringPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [filteringPanelOpened, setFilteringPanelOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  const openFilteringPanel = useCallback(() => {
    setFilteringPanelOpened(true);
  }, []);

  const closeFilteringPanel = useCallback(() => {
    setFilteringPanelOpened(false);
  }, []);

  function toggleFilteringPanel() {
    if (!filteringPanelOpened) {
      openFilteringPanel();
    } else {
      closeFilteringPanel();
    }
  }

  useHotkeys([['mod+alt+F', toggleFilteringPanel]]);

  return (
    <>
      <FilteringPanel opened={filteringPanelOpened} close={closeFilteringPanel} />
      <AppActionsButton opened={false} open={openFilteringPanel} label={t('actions.openFilteringPanel')}>
        <FilterAltIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}