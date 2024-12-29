import { useTranslation } from "react-i18next";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { AppActionsButton } from "../AppActionsButton";

export function FilteringPanelAction(props: {
  onOpenFiltering: () => void;
}) {
  const { onOpenFiltering } = props;
  const { t } = useTranslation('common');

  return (
    <AppActionsButton opened={false} open={onOpenFiltering} label={t('actions.openFilteringPanel')}>
      <FilterAltIcon fontSize="large" />
    </AppActionsButton>
  )
}