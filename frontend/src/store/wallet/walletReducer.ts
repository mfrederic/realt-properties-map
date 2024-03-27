// walletReducer.ts
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Wallet } from '../../types/wallet';
import { AppDispatch, RootState } from '../store';
import { getItem, setItem } from '../../services/localStorage';
import { getOwnedTokens } from '../../services/tokens';
import { getUuid } from '../../utils/crypto';
import { showError, showLoading, showSuccess } from '../../utils/notifications';
import { TFunction } from 'i18next';

const LOCAL_STORAGE_NAME = 'WALLETS';

interface WalletState {
  wallets: Wallet[];
  isLoading: boolean;
}

const initialState: WalletState = getItem<WalletState>(LOCAL_STORAGE_NAME, {
  wallets: [],
  isLoading: false,
});

export function fetchWallets(t: TFunction<'common', 'notifications'>) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const { isLoading } = getState().wallets;
    const walletAddresses = getState().settings.addresses;
    if (isLoading) {
      return;
    }
    dispatch(setIsLoading(true));
    const { close } = showLoading({
      title: t('wallets.loadingTitle'),
      message: t('pleaseWait'),
    });
    
    try {
      const tokens = await getOwnedTokens(walletAddresses);
      const wallets = walletAddresses.map<Wallet>((w) => ({
        address: w,
        uuid: getUuid(),
        rmm: [],
        gnosis: [],
        visible: true,
      }));
      tokens.forEach(([rmm, gnosis], address) => {
        const wallet = wallets.find((w) => w.address.toLowerCase() === address.toLowerCase());
        if (!wallet) {
          return;
        }
        wallet.rmm = rmm.map((token) => [token.address, token.amount]);
        wallet.gnosis = gnosis.map((token) => [token.address, token.amount]);
      });
      dispatch(setWalletList(wallets));
      showSuccess({
        title: t('wallets.successLoadingTitle'),
        message: t('wallets.successLoadingMessage'),
      });
    } catch (error) {
      console.error(error);
      showError({
        title: t('wallets.errorLoadingTitle'),
        message: t('tryAgainLater'),
      });
    } finally {
      dispatch(setIsLoading(false));
      close();
    }
  }
}

export const walletsSlice = createSlice({
  name: 'wallets',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      setItem<WalletState>(LOCAL_STORAGE_NAME, state);
    },
    setWalletList: (state, action: PayloadAction<Wallet[]>) => {
      state.wallets = action.payload;
      state.isLoading = false;
      setItem<WalletState>(LOCAL_STORAGE_NAME, state);
    },
    addWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallets.push(action.payload);
      state.isLoading = false;
      setItem<WalletState>(LOCAL_STORAGE_NAME, state);
    },
    removeWallet: (state, action: PayloadAction<string>) => {
      state.wallets = state.wallets.filter((wallet) => wallet.address !== action.payload);
      state.isLoading = false;
      setItem<WalletState>(LOCAL_STORAGE_NAME, state);
    },
    updateWallet: (state, action: PayloadAction<Wallet>) => {
      state.wallets = state.wallets.map((wallet) => {
        if (wallet.uuid === action.payload.uuid) {
          return action.payload;
        }
        return wallet;
      });
      state.isLoading = false;
      setItem<WalletState>(LOCAL_STORAGE_NAME, state);
    },
  }
});

export const { setIsLoading, setWalletList, addWallet, removeWallet, updateWallet } = walletsSlice.actions;

export const selectWallets = (state: RootState) => state.wallets;

export default walletsSlice.reducer;