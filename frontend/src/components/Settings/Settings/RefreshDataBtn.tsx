import { Box, Button } from "@mantine/core"
import { useTranslation } from "react-i18next";

export function RefreshDataButton() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });

  function refresh() {
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