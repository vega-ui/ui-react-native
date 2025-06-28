import { render, fireEvent } from '@testing-library/react-native';
import { BaseButton } from './BaseButton';
import { Text } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { BaseButtonIcon, BaseButtonLabel } from './components';

const Heart = ({ ...props }) => {
  return (
    <Svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
         stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
      <Path
        d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/>
    </Svg>
  )
}

describe('BaseButton', () => {
  it('renders with children', () => {
    const { getByText } = render(
      <BaseButton>
        <Text>Click me</Text>
      </BaseButton>
    );
    
    expect(getByText('Click me')).toBeTruthy();
  });
  
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <BaseButton onPress={onPress}>
        <Text>Pressable</Text>
      </BaseButton>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
  
  it('does not call onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <BaseButton onPress={onPress} disabled>
        <Text>Disabled</Text>
      </BaseButton>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
  });
  
  it('renders label correctly', () => {
    const { getByText } = render(
      <BaseButton>
        <BaseButtonLabel>Label</BaseButtonLabel>
      </BaseButton>
    );
    
    expect(getByText('Label')).toBeTruthy();
  });
  
  it('renders icon correctly', () => {
    const { getByTestId } = render(
      <BaseButton>
        <BaseButtonIcon testID='icon'>
          <Heart />
        </BaseButtonIcon>
      </BaseButton>
    );
    
    expect(getByTestId('icon')).toBeTruthy();
  });
});
