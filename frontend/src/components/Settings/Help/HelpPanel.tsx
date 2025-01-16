import { Modal } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { Kbds } from "../../Common/Kbds";
import { HelpContent } from "./HelpContent";
import { useSmallScreen } from "../../../hooks/useSmallScreen";

export default function HelpPanel({
  opened,
  close,
}: {
  opened: boolean;
  close: () => void;
}) {
  const isSmallScreen = useSmallScreen();
  const { t } = useTranslation('common', { keyPrefix: 'help' });

  return (
    <Modal.Root opened={opened} onClose={close} centered size="lg" fullScreen={isSmallScreen} zIndex={10000}>
      <Modal.Overlay blur={10} />
      <Modal.Content>
        <Modal.Header>
          <Modal.Title className="w-full !text-xl !font-bold !pr-3">
            <div className="w-full flex flex-row gap-2 items-center justify-center">
              <span className="flex-1">{t('title')}</span>
              <div><Kbds hotkey="mod+alt+H" /></div>
            </div>
          </Modal.Title>
          <Modal.CloseButton />
        </Modal.Header>
        <Modal.Body className="!pt-5">
          <HelpContent />
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}