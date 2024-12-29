import { Provider } from 'react-redux';
import './i18next/i18next';
import store from './store/store';
import { MapWrapper } from './components/Map/MapWrapper';
import { AppActions } from './components/Settings/AppActions/AppActions';
import { MantineProviders } from './providers/MantineProvider';
import { HotkeysProvider } from './providers/HotkeysProvider';
import InitStoreProvider from './providers/InitStoreProvider';
import { QueryProvider } from './providers/QueryProvider';
import { initAnalytics } from './services/analytics';
import SplashScreen from './components/Common/SplashScreen';
import { useState } from 'react';

initAnalytics();

function App() {
  const [display, setDisplay] = useState(true);
  return (
    <Provider store={store}>
      <InitStoreProvider>
        <QueryProvider>
          <MantineProviders>
            <HotkeysProvider>
              <SplashScreen onVisibleChange={setDisplay} />
              <MapWrapper />
              {!display && <AppActions />}
            </HotkeysProvider>
          </MantineProviders>
        </QueryProvider>
      </InitStoreProvider>
    </Provider>
  );
}

export default App;
