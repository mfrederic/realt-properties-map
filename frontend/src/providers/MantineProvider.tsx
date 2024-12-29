import { useEffect, useState } from 'react';
import {
  Affix,
  MantineProvider, localStorageColorSchemeManager,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { modalStyles, theme } from '../theme/theme'
import { useSmallScreen } from '../hooks/useSmallScreen';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

export function MantineProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const isSmallScreen = useSmallScreen();
  const [position, setPosition] = useState(
    isSmallScreen ? { bottom: 0, left: 0 } : { top: 0, right: 0 }
  );

  useEffect(() => {
    setPosition(isSmallScreen ? { bottom: 0, left: 0 } : { top: 10, right: 10 });
  }, [isSmallScreen]);

  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme='dark'
      colorSchemeManager={colorSchemeManager}
    >
      <Affix
        className="p-1 sm:p-4"
        zIndex={1010}
        position={position}>
        <Notifications
          withinPortal={false}
          limit={5}
          autoClose={6000} />
      </Affix>
      <ModalsProvider
        modalProps={{
          centered: true,
          withCloseButton: false,
          styles: modalStyles,
        }}
      >
        {children}
      </ModalsProvider>
    </MantineProvider>
  )
}