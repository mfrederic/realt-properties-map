import { useTranslation } from "react-i18next";
import LinkIcon from '@mui/icons-material/Link';
import CheckIcon from '@mui/icons-material/Check';
import { AppActionsButton } from "../AppActionsButton";
import { useCopyUrl } from "../../../../hooks/useCopyUrl";

export function CopyUrlAction() {
  const { t } = useTranslation('common');
  const { copied, onCopyUrl } = useCopyUrl();

  return (
    <AppActionsButton opened={false} open={onCopyUrl} label={t('actions.copyUrl')} color={copied ? 'teal' : ''}>
      {
        !copied
          ? <LinkIcon fontSize="large" />
          : <CheckIcon fontSize="large" />
      }
    </AppActionsButton>
  )
}