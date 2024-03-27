import {
  Affix,
  MantineProvider, localStorageColorSchemeManager,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { modalStyles, theme } from '../theme/theme'
import { useViewportSize } from '@mantine/hooks';
import { useEffect, useState } from 'react';

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

export function MantineProviders({
  children,
}: {
  children: React.ReactNode
}) {
  const { width } = useViewportSize();
  const [position, setPosition] = useState(
    width > 768 ? { bottom: 0, left: 0 } : { top: 0, right: 0 }
  );

  useEffect(() => {
    setPosition(width > 768 ? { bottom: 0, left: 0 } : { top: 10, right: 10 });
  }, [width]);

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