import { render, fireEvent, screen } from '@testing-library/react';
import { SettingsBtn } from '../SettingsBtn';

describe('SettingsBtn component', () => {
  test('renders without crashing and button click works', () => {
    const setOpen = jest.fn();

    render(<SettingsBtn open={false} setOpen={setOpen} />);

    fireEvent.click(screen.getByLabelText('Open settings'));

    expect(setOpen).toHaveBeenCalledWith(true);
  });

  test('does not render when open is true', () => {
    const setOpen = jest.fn();

    render(<SettingsBtn open={true} setOpen={setOpen} />);

    expect(screen.queryByLabelText('Open settings')).toBeNull();
  });
});