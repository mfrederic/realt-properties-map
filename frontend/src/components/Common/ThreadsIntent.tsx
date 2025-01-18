import { ActionIcon, ActionIconProps } from "@mantine/core";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useTranslation } from "../../hooks/useTranslation";

export function ThreadsIntent(props: {
  text: string;
  url: string;
  hashtags: string[];
} & ActionIconProps) {
  const { t } = useTranslation('common');
  
  const { text, url } = props;
  const threadsIntent = encodeURI(`https://www.threads.net/intent/post?url=${url}&`) + `text=${text}`;

  return (

    <ActionIcon
      variant="default"
      component="a"
      title={t('settings.threads.shareOnThreads')}
      target="_blank"
      referrerPolicy="no-referrer"
      href={encodeURI(threadsIntent)}
      {...props}>
      <AlternateEmailIcon fontSize="medium" />
    </ActionIcon>
  )
}