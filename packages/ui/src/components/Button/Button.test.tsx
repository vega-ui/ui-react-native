import { render, fireEvent } from '@testing-library/react-native';
import { Button } from './Button';
import { Text } from 'react-native';
import { ButtonIcon, ButtonLabel } from './components';
import Svg, { Path } from 'react-native-svg';

const Heart = ({ ...props }) => {
  return (
    <Svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
         stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
      <Path
        d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/>
    </Svg>
  )
}

describe('Button', () => {
  it('renders Button with children', () => {
    const { getByText } = render(
      <Button>
        <Text>Click me</Text>
      </Button>
    );
    
    expect(getByText('Click me')).toBeTruthy();
  });
  
  it('renders Button with different sizes', () => {
    const { getByText } = render(
      <Button size='large'>
        <Text>Large Button</Text>
      </Button>
    );
    
    expect(getByText('Large Button')).toBeTruthy();
  });
  
  it('renders Button with custom border-radius', () => {
    const { getByText } = render(
      <Button brRatio={0.5}>
        <Text>Button with custom border radius</Text>
      </Button>
    );
    
    expect(getByText('Button with custom border radius')).toBeTruthy();
  });
  
  it('Button calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button onPress={onPress}>
        <Text>Press me</Text>
      </Button>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
  
  it('Button does not call onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <Button onPress={onPress} disabled>
        <Text>Disabled</Text>
      </Button>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
  });
  
  it('renders ButtonLabel correctly', () => {
    const { getByText } = render(
      <Button>
        <ButtonLabel>
          <Text>Button Label</Text>
        </ButtonLabel>
      </Button>
    );
    
    expect(getByText('Button Label')).toBeTruthy();
  });
  
  it('renders ButtonIcon correctly', () => {
    const { getByTestId } = render(
      <Button>
        <ButtonIcon>
          <Heart testID='heart-icon' />
        </ButtonIcon>
      </Button>
    );
    
    expect(getByTestId('heart-icon')).toBeTruthy();
  });
});
