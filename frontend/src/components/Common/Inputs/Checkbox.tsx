import { CheckboxProps, createPolymorphicComponent, Checkbox as MantineCheckbox } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

const _Checkbox = (props: CheckboxProps) => {
  const isSmallScreen = useSmallScreen();
  return <MantineCheckbox {...props} size={isSmallScreen ? 'lg' : 'md'} />
}

export const Checkbox = createPolymorphicComponent<'input', CheckboxProps>(_Checkbox);