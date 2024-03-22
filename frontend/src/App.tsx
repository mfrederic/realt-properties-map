import { Header } from './containers/Header/Header';
import { RealtMap } from './containers/Map/MapWrapper';
import { useAppDispatch, useAppSelector } from './hooks/useStore';
import { useEffect, useState } from 'react';
import { Wallet } from './types/wallet';
import { getOwnedTokens } from './services/tokens';
import { setWalletList } from './store/wallet/walletReducer';
import { getRealtProperties } from './hooks/useRealT';
import { setProperties } from './store/properties/propertiesReducer';
import { RealtProperty } from './types/realtProperty';
import { Toasts } from './containers/Toasts';

function App() {
  const dispatch = useAppDispatch();
  const [error, setError] = useState(false);
  const wallets = useAppSelector((state) => state.wallets.wallets);
  const [loadingTokens, setLoadingTokens] = useState(false);
  const [loadingProperties, setLoadingProperties] = useState(false);
  const [realtProperties, setRealtProperties] = useState<Array<RealtProperty>>([]);

  const [success, setSuccess] = useState(!loadingTokens && !loadingProperties && !error);
  useEffect(() => {
    setSuccess(!loadingTokens && !loadingProperties && !error);
  }, [loadingTokens, loadingProperties, error]);

  useEffect(() => {
    if (wallets.length === 0) {
      return;
    }
    setLoadingTokens(true);
    const updatedWallets = wallets.map<Wallet>((w) => ({ ...w, rmm: [], gnosis: [] }));
    getOwnedTokens(wallets.map((w) => w.address))
      .then((tokens) => {
        tokens.forEach(([rmm, gnosis], index) => {
          const wallet = updatedWallets.find((w) => w.address === index);
          if (!wallet) {
            return;
          }
          wallet.rmm = rmm.map((token) => [token.address, token.amount]);
          wallet.gnosis = gnosis.map((token) => [token.address, token.amount]);
        });
        dispatch(setWalletList(updatedWallets));
      })
      .finally(() => {
        setLoadingTokens(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (realtProperties.length > 0 || loadingProperties) {
      return;
    }
    setLoadingProperties(true);
    getRealtProperties()
      .then((properties) => {
        if (properties.error) {
          setError(true);
        }
        dispatch(setProperties(properties.properties));
        setRealtProperties(properties.properties);
      })
      .finally(() => {
        setLoadingProperties(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Header />
      <RealtMap />
      <Toasts
        tokens={loadingTokens}
        properties={loadingProperties}
        success={success}
        error={error} />
    </div>
  );
}

export default App;
