import { Box } from "@mantine/core"
import { useTranslation } from "react-i18next";
import { analyticsEvent } from "../../../services/analytics";
import { getLastCacheClear, purgeCache } from "../../../services/apollo.client";
import dayjs from "../../../utils/date";
import { Button } from "../../Common/Inputs/Button";

export function RefreshDataButton() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const cachedFrom = dayjs(getLastCacheClear(false)).format('DD/MM/YYYY HH:mm:ss');

  async function refresh() {
    await purgeCache();
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
        title={`${t('refreshDataTooltip')}. ${t('cachedFrom')} ${cachedFrom}`}
        variant="subtle">
        {t('refreshData')}
      </Button>
    </Box>
  )
}