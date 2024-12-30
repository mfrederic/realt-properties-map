import { Drawer, DrawerProps } from "@mantine/core";
import { useSmallScreen } from "../../hooks/useSmallScreen";

export function AppDrawer(props: {
  opened: boolean;
  close: () => void;
  children: React.ReactNode;
  header: React.ReactNode;
  position?: DrawerProps['position'];
  noPadding?: boolean;
  extraClassnames?: string;
}) {
  const {
    opened,
    close,
    position = 'right',
    children,
    header,
    noPadding = false,
    extraClassnames = '',
  } = props;
  const isSmallScreen = useSmallScreen();

  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position={position}
      size={isSmallScreen ? '100%' : 'md'}>
      <Drawer.Content>
        {
          !isSmallScreen &&
          <Drawer.Header className={`flex flex-col ${noPadding ? '!p-0 !mb-4' : '!pb-0'}`}>
            { header }
          </Drawer.Header>
        }
        <Drawer.Body
          className={`!mb-20 !sm:mb-0 ${noPadding ? '!p-0' : ''} ${extraClassnames}`}>
          {
            isSmallScreen && header
          }
          { children }
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  )
}