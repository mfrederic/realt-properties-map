import { Overlay, Title } from "@mantine/core";
import { RealtLogo } from "./RealtLogo";
import { useState, useEffect } from "react";
import MadeBy from "./MadeBy";

export default function SplashScreen({
  onVisibleChange = () => {},
}: {
  onVisibleChange?: (visible: boolean) => void;
}) {
  const [visible, setVisible] = useState(true);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setOpacity(0);
    }, 1000);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      onVisibleChange(false);
    }, 1500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <Overlay
      backgroundOpacity={.5}
      blur={15}
      className="flex flex-col items-center justify-center h-screen"
      style={{
        opacity,
        transition: 'opacity 500ms ease-out'
      }}
      zIndex={1000}
    >
      <RealtLogo className="w-64 mb-12" />
      <Title order={1} size="2rem">RealT Properties Map</Title>
      <MadeBy />
    </Overlay>
  );
}
