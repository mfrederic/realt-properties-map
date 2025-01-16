import { Anchor, CopyButton, Flex, Mark, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Button } from "../../Common/Inputs/Button";
import MadeBy from "../../Common/MadeBy";
import { ThreadsIntent } from "../../Common/ThreadsIntent";
import { TwitterIntent } from "../../Common/TwitterIntent";

export function HelpContent() {
  const { t } = useTranslation('common', { keyPrefix: 'help' });

  return (
    <Flex direction="column" align="center" justify="center" gap="xl">
      <Text align="justify" className="w-full">
        {t('description')}
      </Text>
      <Text align="justify" className="w-full">
        {t('github')}&nbsp;
        <Anchor href="https://github.com/mfrederic/realt-properties-map/" target="_blank" rel="noreferrer">GitHub</Anchor>.
      </Text>
      <Text align="justify" className="w-full">
        {t('telegram')}&nbsp;
        <Anchor href="https://t.me/+nqFYq3GTe6lkZDI0" target="_blank" rel="noreferrer">Telegram</Anchor>.
      </Text>
      <Text align="justify" className="w-full">
        {t('support1')}
        <span className="inline md:hidden"> using the button below</span>
        <span className="hidden md:inline">&nbsp;</span>
        <Mark className="hidden md:inline">0x544f04Db543F1Be6A5B59C59a20cEEcb7E9B152C</Mark>. {t('support2')}
      </Text>
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full">
        <CopyButton value="0x544f04Db543F1Be6A5B59C59a20cEEcb7E9B152C">
          {({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'blue'} onClick={copy} className="!w-full md:!w-auto">
              {copied ? 'Copied wallet address' : 'Copy wallet address'}
            </Button>
          )}
        </CopyButton>
        <div className="flex flex-row gap-2 ">
          <TwitterIntent
            size="xl"
            text="Discover RealT properties like never before with this amazing interactive map!"
            url={window.location.href}
            hashtags={['RealT', 'RealToken', 'RPM', 'RealtPropertyMap']}
          />
          <ThreadsIntent
            size="xl"
            text="Discover RealT properties like never before with this amazing interactive map!"
            url={window.location.href}
            hashtags={['RealT', 'RealToken', 'RPM', 'RealtPropertyMap']}
          />
        </div>
      </div>
      <MadeBy />
    </Flex>
  )
}