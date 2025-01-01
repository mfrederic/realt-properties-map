import { SelectProps, Select as MantineSelect } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function Select(props: SelectProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineSelect {...props} size={isSmallScreen ? 'lg' : 'md'} />
}