import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import { showError, showLoading, showSuccess } from "../../utils/notifications";
import { TFunction } from "i18next";
import { RealToken } from "../../types/realtProperty";
import { getRealTokens } from "../../services/realtokens";

interface RealTokensState {
  realtokens: Array<RealToken>;
  isLoading: boolean;
}

const initialState: RealTokensState = {
  realtokens: [],
  isLoading: false,
};

export function fetchRealtokens(t: TFunction<'common', 'notifications'>) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    const isLoading = getState().realtokens.isLoading;
    if (isLoading) {
      return
    }
    dispatch(setIsLoading(true));
    const { close } = showLoading({
      title: t('realtokens.loadingTitle'),
      message: t('pleaseWait'),
    })

    try {
      const { realtokens } = await getRealTokens();
      dispatch(setRealtokens(realtokens));
      showSuccess({
        title: t('realtokens.successLoadingTitle'),
        message: t('realtokens.successLoadingMessage'),
      });
    } catch (error) {
      dispatch(setRealtokens([]));
      showError({
        title: t('realtokens.errorLoadingTitle'),
        message: t('tryAgainLater'),
      });
      console.error(error);
    } finally {
      dispatch(setIsLoading(false));
      close();
    }
  }
}

export const realtokensSlice = createSlice({
  name: 'realtokens',
  initialState,
  reducers: {
    setRealtokens(state, action: PayloadAction<Array<RealToken>>) {
      state.realtokens = action.payload;
      state.isLoading = false;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    }
  }
});

export const { setRealtokens, setIsLoading } = realtokensSlice.actions;

export default realtokensSlice.reducer;