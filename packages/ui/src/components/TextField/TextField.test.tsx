import { render, fireEvent } from '@testing-library/react-native';
import { TextField } from './TextField';
import React from 'react';
import { Text } from '../Text';

describe('TextField', () => {
  it('renders correctly by default', () => {
    const { getByPlaceholderText } = render(<TextField placeholder='Type here' />);
    expect(getByPlaceholderText('Type here')).toBeTruthy();
  });
  
  it('applies placeholder color depending on disabled state', () => {
    const { getByPlaceholderText, rerender } = render(
      <TextField placeholder='Email' disabled />
    );
    
    const input = getByPlaceholderText('Email');
    expect(input.props.accessibilityState.disabled).toBe(true);
    
    rerender(<TextField placeholder='Email' disabled={false} />);
    expect(getByPlaceholderText('Email').props.accessibilityState.disabled).toBe(false);
  });
  
  it('disables input when disabled prop is true', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder='Name' disabled />
    );
    
    const input = getByPlaceholderText('Name');
    expect(input.props.editable).toBe(false);
  });
  
  it('respects editable and selectTextOnFocus', () => {
    const { getByPlaceholderText } = render(
      <TextField placeholder='Phone' editable={false} selectTextOnFocus={false} />
    );
    
    const input = getByPlaceholderText('Phone');
    expect(input.props.editable).toBe(false);
    expect(input.props.selectTextOnFocus).toBe(false);
  });
  
  it('calls onFocus and onBlur handlers', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    
    const { getByPlaceholderText } = render(
      <TextField placeholder='Focus test' onFocus={onFocus} onBlur={onBlur} />
    );
    
    const input = getByPlaceholderText('Focus test');
    fireEvent(input, 'focus');
    expect(onFocus).toHaveBeenCalled();
    
    fireEvent(input, 'blur');
    expect(onBlur).toHaveBeenCalled();
  });
  
  it('renders start and end slots when provided', () => {
    const { getByText } = render(
      <TextField
        placeholder='Slot test'
        startSlot={<Text>Start</Text>}
        endSlot={<Text>End</Text>}
      />
    );
    
    expect(getByText('Start')).toBeTruthy();
    expect(getByText('End')).toBeTruthy();
  });
  
  it('applies style props correctly', () => {
    const { getByPlaceholderText } = render(
      <TextField
        placeholder='Styled'
        style={{ color: 'red' }}
        wrapperStyle={{ borderWidth: 2 }}
      />
    );
    
    const input = getByPlaceholderText('Styled');
    expect(input.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ color: 'red' }),
      ])
    );
  });
});
