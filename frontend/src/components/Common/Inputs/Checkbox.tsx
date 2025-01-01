import { CheckboxProps, Checkbox as MantineCheckbox } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function Checkbox(props: CheckboxProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineCheckbox {...props} size={isSmallScreen ? 'lg' : 'md'} />
}