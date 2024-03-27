import { Box, Center, SegmentedControl, useMantineColorScheme } from "@mantine/core";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useTranslation } from "react-i18next";

export function ColorSchemeOption() {
  const { t } = useTranslation('common', { keyPrefix: 'settings' });
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <SegmentedControl
      className="w-full"
      color={'brand'}
      fullWidth={true}
      value={colorScheme}
      onChange={() => toggleColorScheme()}
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