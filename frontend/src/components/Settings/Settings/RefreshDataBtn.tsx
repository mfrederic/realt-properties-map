import { Box, Button } from "@mantine/core"
import { useTranslation } from "react-i18next";
import { analyticsEvent } from "../../../services/analytics";

export function RefreshDataButton() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });

  function refresh() {
    analyticsEvent({
      category: 'Settings',
      action: 'Refresh Data',
    });
    window.location.reload()
  }
  
  return (
    <Box ta={'center'}>
      <Button
        fullWidth
        onClick={refresh}
        size="md"
        variant="subtle">
        {t('refreshData')}
      </Button>
    </Box>
  )
}