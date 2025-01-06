import { RangeSliderProps, RangeSlider as MantineRangeSlider } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function RangeSlider(props: RangeSliderProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineRangeSlider {...props} size={isSmallScreen ? 'xl' : 'md'} />
}
