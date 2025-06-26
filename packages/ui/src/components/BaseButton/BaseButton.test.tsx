import { render } from '@testing-library/react-native'
import { BaseButton } from './BaseButton'

const TEST_TEXT = 'TEST'

describe('Text', () => {
  it('renders', () => {
    const { getByText } = render(<BaseButton>{TEST_TEXT}</BaseButton>)
    expect(getByText(TEST_TEXT)).toBeOnTheScreen()
  })
})
