import { Checkbox, CheckboxProps, Grid, Tooltip } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

export function Option({
  id,
  label,
  checked,
  icon,
  disabled = false,
  onChange,
  size,
}: {
  id: string,
  label: string,
  checked: boolean,
  icon?: CheckboxProps['icon'],
  disabled?: boolean,
  onChange: (event: boolean) => void,
  size?: CheckboxProps['size'],
}) {
  const mediaQuerySize = useMediaQuery('(max-width: 768px)') ? 'xl' : 'md';
  const consolidatedSize = size || mediaQuerySize;

  return (
    <Grid className="py-4">
      <Grid.Col>
        <Tooltip label={`Toggle ${label}`}>
          <Checkbox
            size={consolidatedSize}
            label={label}
            checked={checked}
            disabled={disabled}
            onChange={() => onChange(!checked)}
            icon={icon}
            id={id}
            name={id}
          />
        </Tooltip>
      </Grid.Col>
    </Grid>
  )
}