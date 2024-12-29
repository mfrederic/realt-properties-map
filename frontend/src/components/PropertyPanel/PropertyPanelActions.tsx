import { useTranslation } from "react-i18next";
import { ActionIcon, Button, Flex, Grid } from "@mantine/core";
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Env from "../../utils/env";
import { AffixBtn } from "../Common/AffixBtn/AffixBtn";
import { useCopyUrl } from "../../hooks/useCopyUrl";
import { Property } from "../../types/property";
import { useSmallScreen } from "../../hooks/useSmallScreen";

function encodeUrlUsingPercentEncoding(url: string) {
  return encodeURI(url);
}

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
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common');
  const { copied, onCopyUrl } = useCopyUrl();

  const twitterIntent = `https://twitter.com/intent/tweet?size=large&text=Check out this property on RealT Property Map.&url=${window.location.href}&hashtags=RealT,RealToken,RPM,RealtPropertyMap&related=RealTPlatform`;
  const threadsIntent = `https://www.threads.net/intent/post?url=${window.location.href}&text=Check out this property on RealT Property Map. #RealT #RealToken #RPM #RealtPropertyMap`;
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
          href={`${Env.VITE_REALT_COMMUNITY_URL}/asset/${address}`}>
          Dashboard
        </Button>
      </Grid.Col>
      <Grid.Col span={{
        base: 6,
        md: 6,
      }}>
        <Flex gap="sm">
          <ActionIcon
            variant="default"
            component="a"
            title={t('settings.googleMaps.viewOnGoogleMaps')}
            target="_blank"
            size="lg"
            referrerPolicy="no-referrer"
            href={`https://maps.google.com/?q=${coordinates.lat},${coordinates.lng}`}>
            <GoogleIcon fontSize="medium" />
          </ActionIcon>
          <ActionIcon
            variant="default"
            component="a"
            title={t('settings.x.shareOnX')}
            target="_blank"
            size="lg"
            referrerPolicy="no-referrer"
            href={encodeUrlUsingPercentEncoding(twitterIntent)}>
            <XIcon fontSize="medium" />
          </ActionIcon>
          <ActionIcon
            variant="default"
            component="a"
            title={t('settings.threads.shareOnThreads')}
            target="_blank"
            size="lg"
            referrerPolicy="no-referrer"
            href={encodeUrlUsingPercentEncoding(threadsIntent)}>
            <AlternateEmailIcon fontSize="medium" />
          </ActionIcon>
        </Flex>
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
            fullWidth={!isSmallScreen}
            onClick={onClose}>
            {t('actions.close')}
          </Button>
        </AffixBtn>
      </Grid.Col>
    </Grid>
  )
}