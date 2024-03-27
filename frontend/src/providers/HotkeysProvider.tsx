import { useMantineColorScheme } from "@mantine/core";
import { useHotkeys } from "@mantine/hooks";

export function HotkeysProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toggleColorScheme } = useMantineColorScheme();
  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <>
      {children}
    </>
  )
}