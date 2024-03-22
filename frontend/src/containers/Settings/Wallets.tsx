import { Setting } from "../../components/Setting";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { setDisplayAll } from "../../store/mapOptions/mapOptionsReducer";
import { addWallet, removeWallet, updateWallet } from "../../store/wallet/walletReducer";
import { getUuid } from "../../utils/crypto";
import { Wallet } from "./Wallet";
import WalletIcon from '@mui/icons-material/Wallet';

export function Wallets() {
  const dispatch = useAppDispatch();
  const wallets = useAppSelector((state) => state.wallets.wallets);

  function onSave(address: string, uuid?: string) {
    if (uuid) {
      dispatch(updateWallet({
        ...wallets.find((wallet) => wallet.uuid === uuid)!,
        address,
      }));
    }
    dispatch(addWallet({
      address,
      uuid: getUuid(),
      rmm: [],
      gnosis: [],
      visible: true,
    }));
    if (wallets.length === 0) {
      dispatch(setDisplayAll(false));
    }
  }

  function onRemoveWallet(uuid: string) {
    dispatch(removeWallet(uuid));
    if (wallets.length === 1) {
      dispatch(setDisplayAll(true));
    }
  }

  return (
    <Setting icon={<WalletIcon className="inline-block mr-2" />} label="Wallets">
      {
        wallets.length !== 0 &&
        <div className="px-6 pt-2 pb-4 grid grid-cols-12">
          {
            wallets.map((wallet) => (
              <Wallet
                key={wallet.uuid}
                address={wallet.address}
                exists
                onSave={(address) => onSave(address, wallet.uuid)}
                onDelete={() => onRemoveWallet(wallet.uuid)} />
            ))
          }
        </div>
      }
      <div className="px-6 pt-2 pb-4 grid grid-cols-12">
        <Wallet
          onSave={(address) => onSave(address)} />
      </div>
    </Setting>
  )
}