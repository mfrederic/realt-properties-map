import { useClipboard } from "@mantine/hooks";

export function useCopyUrl() {
  const { copy, copied } = useClipboard({ timeout: 1000 });

  function onCopyUrl() {
    return copy(window.location.href);
  }

  return {
    copy,
    onCopyUrl,
    copied,
  }
}