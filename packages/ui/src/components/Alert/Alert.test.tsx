import React from 'react'
import { render } from '@testing-library/react-native'
import { Alert } from './Alert'
import { AlertBody } from './components'
import { Text } from 'react-native'

describe('Alert', () => {
  it('renders title and AlertBody', () => {
    const { getByText } = render(
      <Alert title='Warning'>
        <AlertBody>This is a body</AlertBody>
      </Alert>
    )
    
    expect(getByText('Warning')).toBeOnTheScreen()
    expect(getByText('This is a body')).toBeOnTheScreen()
  })
  
  it('renders custom iconSlot', () => {
    const { getByTestId } = render(
      <Alert title='Custom Icon' iconSlot={<Text testID='custom-icon'>icon</Text>}>
        <AlertBody>Body</AlertBody>
      </Alert>
    )
    
    expect(getByTestId('custom-icon')).toBeOnTheScreen()
  })
  
  it('renders endSlot content', () => {
    const { getByTestId } = render(
      <Alert
        title='Has endSlot'
        endSlot={<Text testID='end-slot'>Close</Text>}
      >
        <AlertBody>Body</AlertBody>
      </Alert>
    )
    
    expect(getByTestId('end-slot')).toBeOnTheScreen()
  })
})
