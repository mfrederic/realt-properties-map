import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MapOptions } from '../Settings/MapOptions';
import { setDetailedView, setDisplayAll, setDisplayGnosis, setDisplayRmm } from '../../../store/mapOptions/mapOptionsReducer';

// Create a mock store
const mockStore = configureStore();
let store: ReturnType<typeof mockStore>;

describe('MapOptions', () => {
  beforeEach(() => {
    store = mockStore({
      mapOptions: {
        displayRmm: false,
        displayGnosis: false,
        includeNotOwned: false,
        detailedPropertyPopup: false,
      },
      wallets: {
        wallets: [],
        walletAddresses: [],
      },
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <MapOptions />
      </Provider>
    );
  });

  it('renders MapOption components with correct props', () => {
    render(
      <Provider store={store}>
        <MapOptions />
      </Provider>
    );

    expect(screen.getByLabelText('Display RMM')).toBeInTheDocument();
    expect(screen.getByLabelText('Display Gnosis')).toBeInTheDocument();
    expect(screen.getByLabelText('Include not owned')).toBeInTheDocument();
    expect(screen.getByLabelText('Detailed property popup')).toBeInTheDocument();
  });

  it('calls onChange handlers when MapOption components are clicked', () => {
    render(
      <Provider store={store}>
        <MapOptions />
      </Provider>
    );

    fireEvent.click(screen.getByLabelText('Display RMM'));
    expect(store.getActions()).toContainEqual(setDisplayRmm(true));

    fireEvent.click(screen.getByLabelText('Display Gnosis'));
    expect(store.getActions()).toContainEqual(setDisplayGnosis(true));

    fireEvent.click(screen.getByLabelText('Include not owned'));
    expect(store.getActions()).toContainEqual(setDisplayAll(true));

    fireEvent.click(screen.getByLabelText('Detailed property popup'));
    expect(store.getActions()).toContainEqual(setDetailedView(true));
  });
});