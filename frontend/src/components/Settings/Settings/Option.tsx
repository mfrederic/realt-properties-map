import { CheckboxProps } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { Checkbox } from "../../Common/Inputs/Checkbox";
import { Grid } from "../../Common/Layouts/Grid";
import { ReactNode, useCallback } from "react";

export function Option({
  id,
  label,
  checked,
  icon,
  disabled = false,
  onChange,
  size,
  rightSection,
  ...props
}: {
  id: string,
  label: string,
  checked: boolean,
  icon?: CheckboxProps['icon'],
  disabled?: boolean,
  onChange: (event: boolean) => void,
  size?: CheckboxProps['size'],
  rightSection?: ReactNode,
}) {
  const isSmallScreen = useSmallScreen();
  const mediaQuerySize = isSmallScreen ? 'xl' : 'md';
  const consolidatedSize = size || mediaQuerySize;
  
  const onChangeToggle = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <Grid className="py-4">
      <Grid.Col>
        <div className="flex items-center">
          <Checkbox
            className="flex-1"
            size={consolidatedSize}
            label={label}
            checked={checked}
            disabled={disabled}
            onChange={onChangeToggle}
            icon={icon}
            id={id}
            name={id}
            {...props}
            />
          {rightSection}
        </div>
      </Grid.Col>
    </Grid>
  )
}