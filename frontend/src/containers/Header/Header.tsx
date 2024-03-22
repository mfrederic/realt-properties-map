import { useState } from 'react';
import { SettingsBtn } from '../Settings/SettingsBtn';
import { SettingsPanel } from '../Settings/SettingsPanel';
import { StartTooltip } from './StartTooltip';

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StartTooltip />
      <div className="fixed bottom-0 sm:bottom-[auto] sm:top-0 right-0 z-[1001]">
        <SettingsBtn open={open} setOpen={setOpen} />
        <SettingsPanel open={open} setOpen={setOpen} />
      </div>
    </>
  );
}