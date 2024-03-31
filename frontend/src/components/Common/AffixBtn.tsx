import { Affix, Flex } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";

export function AffixBtn({
  children,
  position = { bottom: 20, right: 20 },
  widePosition = { top: 20, right: 20 },
  defaultToPlain = false,
  leftSection,
  rightSection,
}: {
  children: React.ReactNode;
  position?: { bottom?: number; right?: number; top?: number; left?: number; };
  widePosition?: { bottom?: number; right?: number; top?: number; left?: number; };
  defaultToPlain?: boolean;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
}) {
  const { width } = useViewportSize();

  return (
    <>
    {
      width < 768
        ? <Affix position={position}>
          <Flex gap="sm" className="w-screen" justify={
            position.right ? "end" : "start"
          }>
            { leftSection }
            { children }
            { rightSection }
          </Flex>
        </Affix>
        : defaultToPlain
          ? children
          : <Affix position={widePosition}>
            { children }
          </Affix>
    }
    </>
  )
}