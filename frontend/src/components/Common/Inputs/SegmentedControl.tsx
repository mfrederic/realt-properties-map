import { SegmentedControlProps, SegmentedControl as MantineSegmentedControl } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function SegmentedControl(props: SegmentedControlProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineSegmentedControl {...props} size={isSmallScreen ? 'xl' : 'md'} />
}