import { Anchor, Button, CopyButton, Flex, Mark, Modal, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";
import MadeBy from "../../Common/MadeBy";

export default function HelpPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const { t } = useTranslation('common', { keyPrefix: 'help' });

  return (
    <Modal opened={opened} onClose={close} title={t('title')} centered size="lg">
      <Flex direction="column" align="center" justify="center" gap="md">
        <Text>
          {t('description')}
        </Text>
        <Text>
          {t('github')}
          <Anchor href="https://github.com/mfrederic/realt-properties-map/" target="_blank" rel="noreferrer">GitHub</Anchor>.
        </Text>
        <Text>
          {t('telegram')}
          <Anchor href="https://t.me/+nqFYq3GTe6lkZDI0" target="_blank" rel="noreferrer">Telegram</Anchor>.
        </Text>
        <Text>
          {t('support1')} <Mark>0x544f04Db543F1Be6A5B59C59a20cEEcb7E9B152C</Mark>. {t('support2')}
        </Text>
        <CopyButton value="0x544f04Db543F1Be6A5B59C59a20cEEcb7E9B152C">
          {({ copied, copy }) => (
            <Button color={copied ? 'teal' : 'blue'} onClick={copy}>
              {copied ? 'Copied wallet address' : 'Copy wallet address'}
            </Button>
          )}
        </CopyButton>
        <MadeBy />
      </Flex>
    </Modal>
  )
}