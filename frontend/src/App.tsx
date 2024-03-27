import { Provider } from 'react-redux';
import store from './store/store';
import { RealtMap } from './components/Map/MapWrapper';
import { AppActions } from './components/Settings/AppActions';
import { MantineProviders } from './providers/MantineProvider';
import { HotkeysProvider } from './providers/HotkeysProvider';
import InitStoreProvider from './providers/InitStoreProvider';
import './i18next/i18next';

function App() {
  return (
    <Provider store={store}>
      <InitStoreProvider>
        <MantineProviders>
          <HotkeysProvider>
            <RealtMap />
            <AppActions />
          </HotkeysProvider>
        </MantineProviders>
      </InitStoreProvider>
    </Provider>
  );
}

export default App;
