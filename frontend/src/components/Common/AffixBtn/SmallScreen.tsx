import { Flex, Affix } from "@mantine/core";

export function SmallScreen(props: {
  children: React.ReactNode;
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  position: { bottom?: number; right?: number; top?: number; left?: number; };
}) {
  const { children, leftSection, rightSection, position } = props;

  return (
    <Affix position={position}>
      <Flex gap="sm" className="w-screen" justify={
        position.right ? "end" : "start"
      }>
        { leftSection }
        { children }
        { rightSection }
      </Flex>
    </Affix>
  )
}