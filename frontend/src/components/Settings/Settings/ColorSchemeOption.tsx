import { Box, Center, SegmentedControl, useMantineColorScheme } from "@mantine/core";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from "react-i18next";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { analyticsEvent } from "../../../services/analytics";

export function ColorSchemeOption() {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  function onToggleColorScheme() {
    analyticsEvent({
      category: 'Settings',
      action: 'Color Scheme',
      label: colorScheme,
    });
    toggleColorScheme();
  }

  return (
    <SegmentedControl
      className="w-full"
      color={'brand'}
      fullWidth={true}
      value={colorScheme}
      onChange={onToggleColorScheme}
      size={isSmallScreen ? 'lg' : 'md'}
      data={[
        {
          value: 'light',
          label: (
            <Center>
              <LightModeIcon />
              <Box ml={'xs'}>{t('light')}</Box>
            </Center>
          ),
        },
        {
          value: 'dark',
          label: (
            <Center>
              <DarkModeIcon />
              <Box ml={'xs'}>{t('dark')}</Box>
            </Center>
          ),
        },
      ]}
    />
  )
}