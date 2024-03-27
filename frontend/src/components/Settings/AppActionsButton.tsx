import { ActionIcon, Tooltip } from '@mantine/core';

export function AppActionsButton({
  label,
  children,
  opened,
  open,
}: {
  label: string;
  children: React.ReactNode;
  opened: boolean;
  open: () => void;
}) {
  return (
    <>
      {
        !opened &&
        <Tooltip label={"Open " + label}>
          <ActionIcon size="xl" aria-label={label} onClick={open} className="p-4 mb-2 mr-2">
            {children}
          </ActionIcon>
        </Tooltip>
      }
    </>
  )
}