import { useTranslation } from "react-i18next";
import SearchIcon from '@mui/icons-material/Search';
import { AppActionsButton } from "../AppActionsButton";
import { useHotkeys } from "@mantine/hooks";

export function SearchAction(props: {
  onToggleSearch: () => void;
  className?: string;
}) {
  const { onToggleSearch, className } = props;
  const { t } = useTranslation('common');

  useHotkeys([['mod+shift+F', onToggleSearch]]);

  return (
    <AppActionsButton opened={false} open={onToggleSearch} label={t('actions.openSearch')} color="lime" className={className}>
      <SearchIcon fontSize="large" />
    </AppActionsButton>
  )
}