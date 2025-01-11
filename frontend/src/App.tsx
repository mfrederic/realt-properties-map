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

initAnalytics();

function App() {
  return (
    <div className="min-w-[20rem] min-h-[20rem]">
      <Provider store={store}>
        <InitStoreProvider>
          <QueryProvider>
            <MantineProviders>
              <HotkeysProvider>
                <MapWrapper />
                <SplashScreen />
                <AppActions />
              </HotkeysProvider>
            </MantineProviders>
          </QueryProvider>
        </InitStoreProvider>
      </Provider>
    </div>
  );
}

export default App;
