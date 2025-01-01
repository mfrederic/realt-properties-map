import { NumberInputProps, NumberInput as MantineNumberInput } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export function NumberInput(props: NumberInputProps) {
  const isSmallScreen = useSmallScreen();
  return <MantineNumberInput {...props} size={isSmallScreen ? 'xl' : 'md'} />
}