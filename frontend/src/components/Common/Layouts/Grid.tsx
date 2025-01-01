import { createPolymorphicComponent, Grid as MantineGrid, GridProps } from "@mantine/core";
import { ComponentPropsWithoutRef } from "react";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

function _Grid(props: GridProps & ComponentPropsWithoutRef<'div'>) {
  const isSmallScreen = useSmallScreen();
  return <MantineGrid {...props} gutter={isSmallScreen ? 'lg' : 'md'} />;
}

const Grid = createPolymorphicComponent<'div', GridProps>(_Grid) as any as typeof _Grid & {
  Col: typeof MantineGrid.Col;
};

// Attach Col component to Grid
Grid.Col = MantineGrid.Col;

export { Grid };