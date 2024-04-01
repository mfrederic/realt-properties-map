import { ActionIcon, Tooltip } from '@mantine/core';

export function AppActionsButton({
  label,
  children,
  opened,
  cssClass = '',
  color = '',
  open,
}: {
  label: string;
  children: React.ReactNode;
  opened: boolean;
  cssClass?: string;
  color?: string;
  open: () => void;
}) {
  return (
    <>
      {
        !opened &&
        <Tooltip label={label}>
          <ActionIcon size="xl" aria-label={label} onClick={open} className={`p-4 mb-2 mr-2 ${cssClass}`} color={color}>
            {children}
          </ActionIcon>
        </Tooltip>
      }
    </>
  )
}