import { render, fireEvent } from '@testing-library/react-native';
import { Switch } from './Switch';

describe('Switch', () => {
  it('renders correctly by default', () => {
    const { getByRole } = render(<Switch />);
    expect(getByRole('switch')).toBeTruthy();
  });
  
  it('renders as checked if defaultChecked is true', () => {
    const { getByRole } = render(<Switch defaultChecked />);
    const element = getByRole('switch');
    expect(element.props.accessibilityState.checked).toBe(true);
  });
  
  it('renders as unchecked if defaultChecked is false', () => {
    const { getByRole } = render(<Switch defaultChecked={false} />);
    const element = getByRole('switch');
    expect(element.props.accessibilityState.checked).toBe(false);
  });
  
  it('calls onValueChange when toggled (uncontrolled)', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch defaultChecked={false} onValueChange={onValueChange} />
    );
    
    fireEvent.press(getByRole('switch'));
    expect(onValueChange).toHaveBeenCalledWith(true);
    
    fireEvent.press(getByRole('switch'));
    expect(onValueChange).toHaveBeenCalledWith(false);
  });
  
  it('does not call onValueChange if disabled', () => {
    const onValueChange = jest.fn();
    const { getByRole } = render(
      <Switch disabled onValueChange={onValueChange} />
    );
    
    fireEvent.press(getByRole('switch'));
    expect(onValueChange).not.toHaveBeenCalled();
  });
  
  it('respects controlled value', () => {
    const { getByRole, rerender } = render(<Switch value={true} />);
    const switchComponent = getByRole('switch');
    expect(switchComponent.props.accessibilityState.checked).toBe(true);
    
    rerender(<Switch value={false} />);
    expect(getByRole('switch').props.accessibilityState.checked).toBe(false);
  });
  
  it('renders correctly with different size and variant', () => {
    const { getByRole } = render(<Switch size='medium' variant='secondary' />);
    expect(getByRole('switch')).toBeTruthy();
  });
});
