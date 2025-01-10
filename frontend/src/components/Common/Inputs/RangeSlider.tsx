import { RangeSliderProps, RangeSlider as MantineRangeSlider, Text } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function RangeSlider(props: RangeSliderProps & {
  textLabel?: string;
}) {
  const isSmallScreen = useSmallScreen();
  return <>
    { props.textLabel &&
      <Text size={!isSmallScreen ? 'md' : 'xl'} className="!mb-2">
        { props.textLabel }
      </Text>
    }
    <MantineRangeSlider {...props} size={isSmallScreen ? 'xl' : 'md'} />
  </>
}
