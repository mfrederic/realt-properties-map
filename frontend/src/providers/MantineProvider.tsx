import {
  Affix,
  MantineProvider, localStorageColorSchemeManager,
} from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { modalStyles, theme } from '../theme/theme'

const colorSchemeManager = localStorageColorSchemeManager({
  key: 'my-app-color-scheme',
});

export function MantineProviders(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme='dark'
      colorSchemeManager={colorSchemeManager}
    >
      <div className="absolute left-[10px] bottom-[70px] md:bottom-[10px] p-1 md:p-4 z-[1010]">
        <Notifications
          withinPortal={false}
          limit={5}
          autoClose={6000} />
      </div>
      <ModalsProvider
        modalProps={{
          centered: true,
          withCloseButton: false,
          styles: modalStyles,
        }}
      >
        {props.children}
      </ModalsProvider>
    </MantineProvider>
  )
}