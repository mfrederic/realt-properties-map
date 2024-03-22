import Version from "../../components/Version";
import { MapOptions } from "./MapOptions";
import { Wallets } from "./Wallets";
import InfoIcon from '@mui/icons-material/Info';

export function SettingsContent({
  className,
}: {
  className?: string
}) {
  return (
    <div className={"flex h-full flex-col relative mt-6 flex-1 " + className}>
      <div className="mb-6">
        <Wallets />
      </div>
      <div className="flex-1 mb-6">
        <MapOptions />
      </div>
      <div className="px-6 mb-6 text-sm flex">
        <InfoIcon className="mr-2" />
        <p>
          No information is saved or sent to any server. The application is
          entirely client-side and the data is stored in your browser's local
          storage.
        </p>
      </div>
      <footer className="flex justify-between justify-self-end text-center text-xs mb-1 px-2">
        <Version />
        <p className="opacity-40">
          Made with ❤️ by <a
            href="https://github.com/mfrederic"
            target="_blank" 
            rel="noreferrer">@mfrederic</a>.
          Base on <a
            href="https://github.com/homelabkas"
            target="_blank"
            rel="noreferrer">@homelabkas</a>'s work.
        </p>
      </footer>
    </div>
  )
}
