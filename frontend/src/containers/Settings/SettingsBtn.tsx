import SettingsIcon from '@mui/icons-material/Settings';

export function SettingsBtn({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  return (
    <>
      {
        !open &&
        <button className="p-4 mb-2 sm:mb-0 sm:mt-2 mr-2 cursor-pointer" onClick={() => setOpen(true)} aria-label="Open settings" title="Open settings">
          <SettingsIcon fontSize="large" />
        </button>
      }
    </>
  )
}