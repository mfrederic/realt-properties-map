import { Affix } from "@mantine/core";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { SmallScreen } from "./SmallScreen";

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
  const isSmallScreen = useSmallScreen();

  return (
    <>
    {
      isSmallScreen
        ? <SmallScreen position={position} leftSection={leftSection} rightSection={rightSection}>{ children }</SmallScreen>
        : defaultToPlain
          ? children
          : <Affix position={widePosition}>
            { children }
          </Affix>
    }
    </>
  )
}