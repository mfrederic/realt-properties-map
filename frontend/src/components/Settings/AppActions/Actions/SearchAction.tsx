import { useTranslation } from "react-i18next";
import SearchIcon from '@mui/icons-material/Search';
import { AppActionsButton } from "../AppActionsButton";

export function SearchAction(props: {
  onToggleSearch: () => void;
}) {
  const { onToggleSearch } = props;
  const { t } = useTranslation('common');

  return (
    <AppActionsButton opened={false} open={onToggleSearch} label={t('actions.openSearch')} color="lime">
      <SearchIcon fontSize="large" />
    </AppActionsButton>
  )
}