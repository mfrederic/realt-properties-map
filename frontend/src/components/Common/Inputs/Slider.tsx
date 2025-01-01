import { SliderProps, Slider as MantineSlider } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function Slider(props: SliderProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineSlider {...props} size={isSmallScreen ? 'xl' : 'md'} />
}