import { Paper } from '@mantine/core';
import { ActionsWrapper } from './Actions/ActionsWrapper';

export function AppActions() {
  return (
    <div className="absolute bottom-0 right-0 md:bottom-auto md:top-[20px] md:right-[20px] z-50">
      <Paper
        radius={0}
        className="md:!bg-transparent">
        <ActionsWrapper />
      </Paper>
    </div>
  )
}