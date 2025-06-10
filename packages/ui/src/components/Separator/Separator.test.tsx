import { render } from '@testing-library/react-native'
import { Separator } from './Separator'

describe('Separator', () => {
  it('renders', () => {
    const { getByTestId } = render(<Separator testID='separator' />)
    expect(getByTestId('separator')).toBeOnTheScreen()
  })
  
  it('renders horizontal separator by default', () => {
    const { getByTestId } = render(<Separator testID='separator' />)
    expect(getByTestId('separator')).toHaveStyle({ width: '100%', height: 1 })
  })
  
  it('renders vertical separator when orientation is vertical', () => {
    const { getByTestId } = render(<Separator testID='separator' orientation='vertical' />)
    expect(getByTestId('separator')).toHaveStyle({ width: 1, height: '100%' })
  })
  
  it('merges custom style', () => {
    const { getByTestId } = render(<Separator testID='separator' style={{ margin: 10 }} />)
    expect(getByTestId('separator')).toHaveStyle({ margin: 10 })
  })
  
  it('passes other props', () => {
    const onLayout = jest.fn()
    const { getByTestId } = render(<Separator testID='separator' onLayout={onLayout} />)
    getByTestId('separator').props.onLayout()
    expect(onLayout).toHaveBeenCalled()
  })
})
