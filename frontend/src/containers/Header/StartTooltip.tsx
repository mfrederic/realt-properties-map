import { useAppSelector } from "../../hooks/useStore";

export function StartTooltip() {
  const wallets = useAppSelector((state) => state.wallets.walletAddresses);

  return (
    wallets && wallets.length <= 0 ? (
      <div className="fixed bottom-3 sm:bottom-[auto] sm:top-3 right-24 z-[1001] bg-white p-4 rounded-lg h-14 text-center drop-shadow-md">
        <div className="absolute top-[8px] right-[8px] -mr-4 bg-white rotate-45 h-10 w-10 " />
        <h3 className="animate-pulse font-semibold">Add your wallet to get started</h3>
      </div>
    ) : null
  )
}