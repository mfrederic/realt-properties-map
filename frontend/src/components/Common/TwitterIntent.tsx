import { useTranslation } from "react-i18next";
import { ActionIcon, ActionIconProps } from "@mantine/core";
import XIcon from '@mui/icons-material/X';

export function TwitterIntent(props: {
  text: string;
  url: string;
  hashtags: string[];
} & ActionIconProps) {
  const { t } = useTranslation('common');
  
  const { text, url, hashtags } = props;
  const twitterIntent = encodeURI(`https://twitter.com/intent/tweet?size=large&text=${text}&url=${url}&hashtags=${hashtags.join(',')}&related=RealTPlatform`);

  return (
    <ActionIcon
      variant="default"
      component="a"
      title={t('settings.x.shareOnX')}
      target="_blank"
      referrerPolicy="no-referrer"
      href={encodeURI(twitterIntent)}
      {...props}>
      <XIcon fontSize="medium" />
    </ActionIcon>
  );
}