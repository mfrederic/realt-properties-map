import { useClipboard } from "@mantine/hooks";
import { analyticsEvent } from "../services/analytics";

export function useCopyUrl() {
  const { copy, copied } = useClipboard({ timeout: 1000 });

  function onCopyUrl() {
    analyticsEvent({
      category: 'App',
      action: 'Copy URL',
      label: window.location.href,
    });
    return copy(window.location.href);
  }

  return {
    copy,
    onCopyUrl,
    copied,
  }
}