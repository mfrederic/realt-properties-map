import { useState } from "react";
import { useTranslation } from "react-i18next";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AppActionsButton } from "../AppActionsButton";
import { FilteringPanel } from "../../../Filtering/FilteringPanel";

export function FilteringPanelAction(props: React.HTMLAttributes<HTMLDivElement> & {
  isOpened?: boolean;
}) {
  const [filteringPanelOpened, setFilteringPanelOpened] = useState(props.isOpened || false);
  const { t } = useTranslation('common');

  return (
    <>
      <FilteringPanel opened={filteringPanelOpened} close={() => setFilteringPanelOpened(false)} />
      <AppActionsButton opened={false} open={() => setFilteringPanelOpened(true)} label={t('actions.openFilteringPanel')}>
        <FilterAltIcon fontSize="large" />
      </AppActionsButton>
    </>
  )
}