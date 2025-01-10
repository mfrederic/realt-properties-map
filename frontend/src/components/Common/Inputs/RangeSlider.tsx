import { RangeSliderProps, RangeSlider as MantineRangeSlider, Text } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function RangeSlider(props: RangeSliderProps & {
  textlabel?: string;
}) {
  const isSmallScreen = useSmallScreen();
  return <>
    { props.textlabel &&
      <Text size={!isSmallScreen ? 'md' : 'xl'} className="!mb-2">
        { props.textlabel }
      </Text>
    }
    <MantineRangeSlider {...props} size={isSmallScreen ? 'xl' : 'md'} />
  </>
}
