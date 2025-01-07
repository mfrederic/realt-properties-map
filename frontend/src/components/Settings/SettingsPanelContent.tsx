import { useTranslation } from "react-i18next";
import InfoIcon from '@mui/icons-material/Info';
import Version from "../Common/Version";
import { Box, Flex, Text } from "@mantine/core";
import MadeBy from "../Common/MadeBy";
import { Button } from "../Common/Inputs/Button";

export function SettingsPanelContent(props: {
  className?: string
  footer?: boolean
} & React.ComponentPropsWithoutRef<'div'>) {
  const { t } = useTranslation('common', { keyPrefix: 'extra' });
  return (
    <Flex direction="column" className={"h-full relative mt-6 flex-1 " + props.className}>
      <div className="flex-1 mb-6">
        {props.children}
      </div>
      { props.footer &&
        <footer className="flex justify-between justify-self-end text-center text-xs mb-1 px-2">
          <Flex
            gap="md"
            direction="column"
            className="px-6 mb-6 text-sm">
            <Flex>
              <InfoIcon className="mr-2" />
              <Text>
                {t('info')}
              </Text>
            </Flex>
            <Box ta="center">
              <Button
                variant={'subtle'}
                component="a"
                title={t('title.viewOnRealT')}
                target="_blank"
                referrerPolicy="no-referrer"
                href="https://github.com/mfrederic/realt-properties-map/issues/new/choose">
                {t('reportIssue')}
              </Button>
            </Box>
            <Flex gap="md">
              <Version />
              <MadeBy extra />
            </Flex>
          </Flex>
        </footer>
      }
    </Flex>
  )
}
