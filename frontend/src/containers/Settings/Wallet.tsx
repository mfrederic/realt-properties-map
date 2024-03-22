import { useState } from "react";
import { getUuid } from "../../utils/crypto";
import DeleteIcon from '@mui/icons-material/Delete';
import { validate } from 'multicoin-address-validator';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

export function validateWallets(
  waletts: string[],
): string[] {
  const walletList: string[] = [];
  for (const wallet of waletts) {
    if (wallet.toLowerCase().startsWith('0x')) {
      walletList.push(wallet.toLowerCase());
    }
  }
  return walletList;
}

export function validateWallet(wallet: string): boolean {
  return validate(wallet, 'gno') || validate(wallet, 'eth');
}

export function Wallet({
  address = '',
  exists = false,
  className,
  onSave,
  onDelete,
  onVisibilityChange,
}: {
  address?: string,
  exists?: boolean,
  className?: string,
  onSave?: (address: string) => void,
  onDelete?: () => void,
  onVisibilityChange?: (visible: boolean) => void,
}) {
  const [id, setId] = useState(`wallet-${getUuid()}`);
  const [valid, setValid] = useState(true);
  const [wallet, setWallet] = useState(address);

  function onUpdateWallet(address: string) {
    setWallet(address);
    if (validateWallet(address) || address === '') {
      setValid(true);
      return;
    }
    setValid(false);
  }

  function save() {
    if (valid) {
      onSave && onSave(wallet);
      setWallet('');
      setId(`wallet-${getUuid()}`);
    }
  }

  function deleteWallet() {
    onDelete && onDelete();
  }

  return (
    <div className={"col-span-full " + className}>
      <div className="mt-2 grid gap-x-4 gap-y-8 grid-cols-12">
        <div className="col-span-8">
          <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
            {exists ? 'Wallet' : 'Add Wallet'}
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">xDai</div>
            <input
              type="text"
              name="wallet"
              id={id}
              className={
                "block w-full rounded-md bg-transparent py-1.5 pl-12 ring-1 ring-inset focus:ring-2 focus:ring-inset text-sm leading-6 " +
                (valid
                  ? "text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600"
                  : "border border-red-500 text-red-900 ring-red-300 placeholder-red-300 focus:ring-red-600")
              }
              placeholder="0x"
              value={wallet}
              onChange={(e) => onUpdateWallet(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-0.5 self-end">
          <button
            type="button"
            className={
              "w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 "
              + (valid && wallet !== ''
                ? "bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
                : "cursor-not-allowed bg-gray-500 hover:bg-gray-600 focus:ring-gray-400")
            }
            onClick={() => save()}
            title={exists ? 'Edit wallet' : 'Add wallet'}
          >
            {exists
              ? <EditIcon fontSize="small" />
              : <AddIcon fontSize="small" />}
          </button>
          {
            exists && (
              <button
                type="button"
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-600 focus:ring-red-400"
                onClick={() => deleteWallet()}
                title="Delete wallet"
              >
                <DeleteIcon fontSize="small" />
              </button>
            )
          }
        </div>
      </div>
    </div>
  )
}