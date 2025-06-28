import { render } from '@testing-library/react-native'
import { Text } from './Text'

const TEST_TEXT = 'TEST'

describe('Text', () => {
  it('renders', () => {
    const { getByText } = render(<Text>{TEST_TEXT}</Text>)
    expect(getByText(TEST_TEXT)).toBeOnTheScreen()
  })
})
