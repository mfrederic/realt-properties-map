import { ActionIcon as MantineActionIcon, ActionIconProps, createPolymorphicComponent } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

function _ActionIcon(props: ActionIconProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineActionIcon {...props} size={isSmallScreen ? 'xl' : 'lg'} />;
}

export const ActionIcon = createPolymorphicComponent<'button', ActionIconProps>(_ActionIcon);