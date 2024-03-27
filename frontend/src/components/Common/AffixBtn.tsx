import { Affix } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export function AffixBtn({
  children,
  position = { bottom: 20, right: 20 },
  widePosition = { top: 20, right: 20 },
  defaultToPlain = false
}: {
  children: React.ReactNode;
  position?: { bottom?: number; right?: number; top?: number; left?: number; };
  widePosition?: { bottom?: number; right?: number; top?: number; left?: number; };
  defaultToPlain?: boolean;
}) {
  const { width } = useViewportSize();

  return (
    <>
    {
      defaultToPlain
        ? width < 768
          ? <Affix position={position}>
            {children}
          </Affix>
          : children
        : width < 768
          ? <Affix position={position}>
            {children}
          </Affix>
          : <Affix position={widePosition}>
            {children}
          </Affix>
    }
    </>
  )
}