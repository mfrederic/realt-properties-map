// walletReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Wallet } from '../../types/wallet';
import { RootState } from '../store';
import { getItem, setItem } from '../../services/localStorage';

const LOCAL_STORAGE_NAME = 'WALLETS';

interface WalletState {
  walletAddresses: string[];
  wallets: Wallet[];
}

const initialState: WalletState = getItem<WalletState>(LOCAL_STORAGE_NAME, {
  walletAddresses: [],
  wallets: [],
});

export const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    setWalletList: (_, action: PayloadAction<Wallet[]>) => {
      const newState = {
        walletAddresses: action.payload.map((wallet) => wallet.address),
        wallets: action.payload,
      };
      setItem<WalletState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    addWallet: (state, action: PayloadAction<Wallet>) => {
      const newState = {
        walletAddresses: [...state.walletAddresses, action.payload.address],
        wallets: [...state.wallets, action.payload],
      };
      setItem<WalletState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    removeWallet: (state, action: PayloadAction<string>) => {
      const walletAdress = state.wallets.find((wallet) => wallet.uuid === action.payload)?.address;
      const newState = {
        walletAddresses: state.walletAddresses.filter((address) => address !== walletAdress),
        wallets: state.wallets.filter((wallet) => wallet.uuid !== action.payload),
      };
      setItem<WalletState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    updateWallet: (state, action: PayloadAction<Wallet>) => {
      const newState = {
        walletAddresses: state.walletAddresses.map((address) => {
          if (address === action.payload.address) {
            return action.payload.address;
          }
          return address;
        }),
        wallets: state.wallets.map((wallet) => {
          if (wallet.uuid === action.payload.uuid) {
            return action.payload;
          }
          return wallet;
        }),
      };
      setItem<WalletState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    },
    toggleVisibility: (state, action: PayloadAction<{
      uuid: string;
      visible: boolean;
    }>) => {
      const newState = {
        walletAddresses: state.walletAddresses,
        wallets: state.wallets.map((wallet) => {
          if (wallet.uuid === action.payload.uuid) {
            return { ...wallet, visible: action.payload.visible };
          }
          return wallet;
        }),
      };
      setItem<WalletState>(LOCAL_STORAGE_NAME, newState);
      return newState;
    }
  }
});

export const { setWalletList, addWallet, removeWallet, updateWallet, toggleVisibility } = walletsSlice.actions;

export const selectWallets = (state: RootState) => state.wallets;

export default walletsSlice.reducer;