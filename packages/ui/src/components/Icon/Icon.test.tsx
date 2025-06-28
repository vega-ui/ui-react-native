import { render } from '@testing-library/react-native';
import { Icon } from './Icon';
import Svg, { Path } from 'react-native-svg';

const Heart = ({ ...props }) => {
  return (
    <Svg viewBox='0 0 24 24' fill='none' stroke='currentColor'
         stroke-width='2' stroke-linecap='round' stroke-linejoin='round' {...props}>
      <Path
        d='M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z'/>
    </Svg>
  )
}

describe('Icon Component', () => {
  it('renders correctly with default size', () => {
    const { getByTestId } = render(
      <Icon color='red' testID='icon'>
        <Heart />
      </Icon>
    );
    
    const icon = getByTestId('icon');
    
    expect(icon).toHaveStyle({
      width: 16,
      height: 16,
    });
  });
  
  it('applies explicit width and height over size', () => {
    const { getByTestId } = render(
      <Icon testID='image' width={50} height={50}>
        <Heart />
      </Icon>
    );
    
    const icon = getByTestId('image');
    
    expect(icon).toHaveStyle({
      width: 50,
      height: 50,
    });
  });
  
  it('renders icon with different sizes correctly', () => {
    const { getByTestId } = render(
      <Icon testID='image' size='lg'>
        <Heart />
      </Icon>
    );
    
    const icon = getByTestId('image');
    
    expect(icon).toHaveStyle({
      width: expect.any(Number),
      height: expect.any(Number),
    });
  });
});
