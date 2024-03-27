import { RootState } from "../store";

export const selectWallets = (state: RootState) => state.wallets;

export const selectWalletsList = (state: RootState) => selectWallets(state).wallets;