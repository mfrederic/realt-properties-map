import { Button as MantineButton, ButtonProps, createPolymorphicComponent } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { ComponentPropsWithoutRef } from "react";

const _Button = (props: ButtonProps & ComponentPropsWithoutRef<'button'>) => {
  const isSmallScreen = useSmallScreen();
  return <MantineButton {...props} size={isSmallScreen ? 'lg' : 'md'} />
}

export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button);