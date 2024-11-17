import { useTranslation } from "react-i18next";
import Env from "../../utils/env";
import { ActionIcon, Button, Grid } from "@mantine/core";
import GoogleIcon from '@mui/icons-material/Google';
import { AffixBtn } from "../Common/AffixBtn";
import { useCopyUrl } from "../../hooks/useCopyUrl";
import { useViewportSize } from "@mantine/hooks";
import { Property } from "../../types/property";

export function PropertyPanelActions({
  marketplaceLink,
  address,
  coordinates,
  onClose,
}: {
  marketplaceLink: string;
  address: string;
  coordinates: Property['coordinates'];
  onClose: () => void;
}) {
  const { width } = useViewportSize();
  const { t } = useTranslation('common');
  const { copied, onCopyUrl } = useCopyUrl();

  return (
    <Grid className="px-4">
      <Grid.Col span={{
        base: 6,
        md: 6,
      }}>
        <Button
          variant="default"
          fullWidth
          component="a"
          title={t('title.viewOnRealT')}
          target="_blank"
          referrerPolicy="no-referrer"
          href={marketplaceLink}>
          RealT
        </Button>
      </Grid.Col>
      <Grid.Col span={{
        base: 6,
        md: 6,
      }}>
        <Button
          variant="default"
          fullWidth
          component="a"
          title={t('title.viewOnRealtoken')}
          target="_blank"
          referrerPolicy="no-referrer"
          href={`${Env.REACT_APP_REALT_COMMUNITY_URL}/asset/${address}`}>
          Dashboard
        </Button>
      </Grid.Col>
      <Grid.Col span={{
        base: 6,
        md: 6,
      }}>
        <Button
          variant="default"
          fullWidth
          component="a"
          title={t('settings.googleMaps.viewOnGoogleMaps')}
          target="_blank"
          referrerPolicy="no-referrer"
          href={`https://maps.google.com/?q=${coordinates.lat},${coordinates.lng}`}
          leftSection={<GoogleIcon fontSize="medium" />}>
          {t('settings.googleMaps.title')}
        </Button>
      </Grid.Col>
      <Grid.Col span={{
        base: 0,
        md: 6,
      }}>
        <AffixBtn
          defaultToPlain
          leftSection={
            <Button
              color={copied ? 'teal' : ''}
              variant="light"
              title={t('title.copyUrl')}
              onClick={onCopyUrl}>
              {t('actions.copyUrl')}
            </Button>
          }>
          <Button
            fullWidth={width > 768}
            onClick={onClose}>
            {t('actions.close')}
          </Button>
        </AffixBtn>
      </Grid.Col>
    </Grid>
  )
}