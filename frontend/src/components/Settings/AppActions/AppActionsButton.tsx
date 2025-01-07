import { ActionIcon, Tooltip } from '@mantine/core';

export function AppActionsButton(props: {
  label: string;
  opened: boolean;
  color?: string;
  open: () => void;
} & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <>
      {
        !props.opened &&
        <Tooltip label={props.label}>
            <ActionIcon size="xl" aria-label={props.label} onClick={props.open} className={`p-4 mb-2 ${props.className}`} color={props.color}>
            {props.children}
          </ActionIcon>
        </Tooltip>
      }
    </>
  )
}