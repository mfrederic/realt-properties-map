import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Wallets } from '../Wallets';
import { addWallet, removeWallet, updateWallet } from '../../../store/wallet/walletReducer';

// Create a mock store
const mockStore = configureStore();
let store: ReturnType<typeof mockStore>;

const validAddress = '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99';
const newValidAddress = '0x9b35Af71d77eaf8d7e40252370304687390A1A52';

describe('Wallets', () => {
  beforeEach(() => {
    store = mockStore({
      wallets: {
        wallets: [],
      },
      mapOptions: {
        displayAll: false,
      },
    });
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Wallets />
      </Provider>
    );
  });

  it('renders Wallet components with correct props', () => {
    render(
      <Provider store={store}>
        <Wallets />
      </Provider>
    );
    
    expect(screen.getByText('Wallets')).toBeInTheDocument();
  });

  it('calls addWallet when adding a new wallet', () => {
    render(
      <Provider store={store}>
        <Wallets />
      </Provider>
    );

    fireEvent.click(screen.getByTitle('Add wallet'));
    expect(store.getActions()).toContainEqual(addWallet({
      address: expect.any(String),
      gnosis: expect.any(Array),
      rmm: expect.any(Array),
      visible: expect.any(Boolean),
      uuid: expect.any(String),
    }));
  });

  it('calls updateWallet when updating an existing wallet', () => {
    const wallet = {
      address: validAddress,
      gnosis: [],
      rmm: [],
      visible: true,
      uuid: 'test',
    };

    store = mockStore({
      wallets: {
        wallets: [wallet],
      },
      mapOptions: {
        displayAll: false,
      },
    });

    render(
      <Provider store={store}>
        <Wallets />
      </Provider>
    );

    const input = screen.getByDisplayValue(wallet.address) as HTMLInputElement;
    fireEvent.change(input, { target: { value: newValidAddress } });

    fireEvent.click(screen.getByTitle('Edit wallet'));
    expect(store.getActions()).toContainEqual(updateWallet({
      ...wallet,
      address: newValidAddress,
    }));
  });

  it('calls removeWallet when deleting an existing wallet', () => {
    const wallet = {
      address: validAddress,
      gnosis: [],
      rmm: [],
      visible: true,
      uuid: 'test',
    };

    store = mockStore({
      wallets: {
        wallets: [wallet],
      },
      mapOptions: {
        displayAll: false,
      },
    });

    render(
      <Provider store={store}>
        <Wallets />
      </Provider>
    );

    fireEvent.click(screen.getByTitle('Delete wallet'));
    expect(store.getActions()).toContainEqual(removeWallet(wallet.uuid));
  });
});