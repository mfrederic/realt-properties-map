import { useViewportSize } from "@mantine/hooks";

export function useSmallScreen() {
  const { width } = useViewportSize();
  return width < 768;
}