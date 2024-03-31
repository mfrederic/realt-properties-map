import { Provider } from 'react-redux';
import store from './store/store';
import { MapWrapper } from './components/Map/MapWrapper';
import { AppActions } from './components/Settings/AppActions';
import { MantineProviders } from './providers/MantineProvider';
import { HotkeysProvider } from './providers/HotkeysProvider';
import InitStoreProvider from './providers/InitStoreProvider';
import './i18next/i18next';
import { QueryProvider } from './providers/QueryProvider';

function App() {
  return (
    <Provider store={store}>
      <InitStoreProvider>
        <QueryProvider>
          <MantineProviders>
            <HotkeysProvider>
              <MapWrapper />
              <AppActions />
            </HotkeysProvider>
          </MantineProviders>
        </QueryProvider>
      </InitStoreProvider>
    </Provider>
  );
}

export default App;
