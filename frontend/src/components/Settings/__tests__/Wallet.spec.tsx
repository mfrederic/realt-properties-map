import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Wallet } from '../Wallets/Wallet';

const validAddress = '0xfd0732Dc9E303f09fCEf3a7388Ad10A83459Ec99';
const invalidAddress = 'validAddress';

describe('Wallet component', () => {
  test('renders without crashing', () => {
    const mockOnSave = jest.fn();

    const view = render(
      <Wallet
        onSave={mockOnSave}
      />
    );
    expect(view).toBeTruthy();
    expect(screen.getByTitle(/Add wallet/i)).toBeInTheDocument();
  });

  test('renders with existing wallet', () => {
    const mockOnSave = jest.fn();

    render(
      <Wallet
        address={validAddress}
        exists={true}
        onSave={mockOnSave}
      />
    );

    expect(screen.getByDisplayValue(validAddress)).toBeInTheDocument();
    expect(screen.getByTitle(/Edit wallet/i)).toBeInTheDocument();
    expect(screen.getByTitle(/Delete wallet/i)).toBeInTheDocument();
  });

  describe('Wallet onSave', () => {

    test('calls onSave with new valid wallet', () => {
      const mockOnSave = jest.fn();
      render(
        <Wallet
          onSave={mockOnSave}
        />
      );

      const input = screen.getByPlaceholderText(/0x/i) as HTMLInputElement;
      fireEvent.change(input, { target: { value: validAddress } });

      const button = screen.getByTitle(/Add wallet/i);
      fireEvent.click(button);

      expect(mockOnSave).toHaveBeenCalledWith(validAddress);
    });

    test('does not call onSave with new invalid wallet', () => {
      const mockOnSave = jest.fn();
      render(
        <Wallet
          onSave={mockOnSave}
        />
      );

      const input = screen.getByPlaceholderText(/0x/i) as HTMLInputElement;
      fireEvent.change(input, { target: { value: invalidAddress } });

      const button = screen.getByTitle(/Add wallet/i);
      fireEvent.click(button);

      expect(mockOnSave).not.toHaveBeenCalled();
    });
  })

  describe('Wallet onUpdate', () => {
    test('calls onUpdateWallet with new valid wallet', () => {
      const mockOnSave = jest.fn();
      render(
        <Wallet
          address={invalidAddress}
          exists={true}
          onSave={mockOnSave}
        />
      );

      const input = screen.getByPlaceholderText(/0x/i) as HTMLInputElement;
      fireEvent.change(input, { target: { value: validAddress } });

      const button = screen.getByTitle(/Edit wallet/i);
      fireEvent.click(button);

      expect(mockOnSave).toHaveBeenCalledWith(validAddress);
    });

    test('does not call onUpdateWallet with new invalid wallet', () => {
      const mockOnSave = jest.fn();
      render(
        <Wallet
          address={validAddress}
          exists={true}
          onSave={mockOnSave}
        />
      );

      const input = screen.getByPlaceholderText(/0x/i) as HTMLInputElement;
      fireEvent.change(input, { target: { value: invalidAddress } });

      const button = screen.getByTitle(/Edit wallet/i);
      fireEvent.click(button);

      expect(mockOnSave).not.toHaveBeenCalled();
    });
  });

  describe('Wallet onDelete', () => {
    test('calls onDelete', () => {
      const mockOnDelete = jest.fn();
      render(
        <Wallet
          address={validAddress}
          exists={true}
          onDelete={mockOnDelete}
        />
      );

      const button = screen.getByTitle(/Delete wallet/i);
      fireEvent.click(button);

      expect(mockOnDelete).toHaveBeenCalled();
    });
  });
});