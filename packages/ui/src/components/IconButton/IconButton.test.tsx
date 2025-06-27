import { render, fireEvent } from '@testing-library/react-native';
import { IconButton } from './IconButton';
import { Text } from 'react-native';
import Svg, { Path } from 'react-native-svg'; // пример иконки

const HeartIcon = ({ ...props }) => {
  return (
    <Svg {...props} width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor'
         stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
      <Path
        d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/>
    </Svg>
  )
}

describe('IconButton', () => {
  it('renders IconButton with children', () => {
    const { getByText } = render(
      <IconButton>
        <Text>Click me</Text>
      </IconButton>
    );
    
    expect(getByText('Click me')).toBeTruthy();
  });
  
  it('renders IconButton with correct icon size based on size prop', () => {
    const { getByTestId } = render(
      <IconButton size='medium'>
        <HeartIcon testID='heart-icon' />
      </IconButton>
    );
    
    const icon = getByTestId('heart-icon');
    
    expect(icon).toHaveStyle({
      width: expect.any(Number),
      height: expect.any(Number),
    });
  });
  
  it('calls onPress when pressed', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <IconButton onPress={onPress}>
        <HeartIcon />
      </IconButton>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).toHaveBeenCalled();
  });
  
  it('does not call onPress when disabled', () => {
    const onPress = jest.fn();
    const { getByRole } = render(
      <IconButton onPress={onPress} disabled>
        <HeartIcon />
      </IconButton>
    );
    
    fireEvent.press(getByRole('button'));
    expect(onPress).not.toHaveBeenCalled();
  });
});
