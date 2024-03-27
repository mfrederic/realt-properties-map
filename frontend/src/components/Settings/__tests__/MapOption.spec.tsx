import { render, fireEvent, screen } from '@testing-library/react';
import { MapOption } from '../Settings/MapOption';

describe('MapOption', () => {
  it('renders without crashing', () => {
    render(<MapOption id="test" label="Test" checked={false} onChange={() => {}} />);
  });

  it('displays the correct label', () => {
    render(<MapOption id="test" label="Test" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeInTheDocument();
  });

  it('checks the checkbox when checked is true', () => {
    render(<MapOption id="test" label="Test" checked={true} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeChecked();
  });

  it('unchecks the checkbox when checked is false', () => {
    render(<MapOption id="test" label="Test" checked={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).not.toBeChecked();
  });

  it('disables the checkbox when disabled is true', () => {
    render(<MapOption id="test" label="Test" checked={false} disabled={true} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).toBeDisabled();
  });

  it('enables the checkbox when disabled is false', () => {
    render(<MapOption id="test" label="Test" checked={false} disabled={false} onChange={() => {}} />);
    expect(screen.getByLabelText('Test')).not.toBeDisabled();
  });

  it('calls onChange when the checkbox is clicked', () => {
    const onChange = jest.fn();
    render(<MapOption id="test" label="Test" checked={false} onChange={onChange} />);
    fireEvent.click(screen.getByLabelText('Test'));
    expect(onChange).toHaveBeenCalled();
  });
});