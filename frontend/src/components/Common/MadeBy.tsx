import { Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

export default function MadeBy({
  extra = false,
}: {
  extra?: boolean;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'extra' });

  return (
    <Text className="opacity-40" size="sm">
      {t('madeBy')} <a
        href="https://github.com/mfrederic"
        target="_blank"
        rel="noreferrer">@mfrederic</a>.&nbsp;
      {extra &&
        <>
          {t('baseOn')}:&nbsp;
          <a
            href="https://github.com/homelabkas"
            target="_blank"
            rel="noreferrer">@homelabkas</a>.
        </>
      }
    </Text>
  )
}
