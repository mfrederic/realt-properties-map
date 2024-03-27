import { Checkbox, Grid, Tooltip } from "@mantine/core";

export function MapOption({
  id,
  label,
  checked,
  disabled = false,
  onChange,
}: {
  id: string,
  label: string,
  checked: boolean,
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
            id={id}
            name={id}
          />
        </Tooltip>
      </Grid.Col>
    </Grid>
  )
}