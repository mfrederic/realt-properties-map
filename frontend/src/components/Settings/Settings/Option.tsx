import { Checkbox, CheckboxProps, Grid, Tooltip } from "@mantine/core";

export function Option({
  id,
  label,
  checked,
  icon,
  disabled = false,
  onChange,
}: {
  id: string,
  label: string,
  checked: boolean,
  icon?: CheckboxProps['icon'],
  disabled?: boolean,
  onChange: (event: boolean) => void,
}) {
  return (
    <Grid className="py-4">
      <Grid.Col>
        <Tooltip label={`Toggle ${label}`}>
          <Checkbox
            size="md"
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