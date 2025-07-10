import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Collapsible } from './Collapsible'
import { CollapsibleTrigger, CollapsibleContent } from './components'
import { Text } from 'react-native'
import { Button, ButtonLabel } from '../Button';

describe('Collapsible', () => {
  it('renders children and controls visibility', () => {
    const { queryByText, rerender } = render(
      <Collapsible open={false}>
        <CollapsibleTrigger asChild>
          <Button appearance='ghost'>
            <ButtonLabel>Toggle</ButtonLabel>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>Hello world</Text>
        </CollapsibleContent>
      </Collapsible>
    )
    
    expect(queryByText('Toggle')).toBeOnTheScreen()
    expect(queryByText('Hello world')).toBeNull()
    
    rerender(
      <Collapsible open={true}>
        <CollapsibleTrigger>
          <Text>Toggle</Text>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>Hello world</Text>
        </CollapsibleContent>
      </Collapsible>
    )
    
    expect(queryByText('Hello world')).toBeOnTheScreen()
  })
  
  it('calls onChangeOpen when trigger is pressed', () => {
    const onChangeOpen = jest.fn()
    
    const { queryByText } = render(
      <Collapsible open={false} onChangeOpen={onChangeOpen}>
        <CollapsibleTrigger asChild>
          <Button appearance='ghost'>
            <ButtonLabel>Toggle</ButtonLabel>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Text>Content</Text>
        </CollapsibleContent>
      </Collapsible>
    )
    
    fireEvent.press(queryByText('Toggle'))
    
    expect(onChangeOpen).toHaveBeenCalledWith(true)
  })
  
  it('toggles between open and close using trigger', () => {
    const TestWrapper = () => {
      const [collapsed, setCollapsed] = React.useState(false)
      
      return (
        <Collapsible open={collapsed} onChangeOpen={setCollapsed}>
          <CollapsibleTrigger asChild>
            <Button testID='button' appearance='ghost'>
              <ButtonLabel>Click me</ButtonLabel>
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <Text>content</Text>
          </CollapsibleContent>
        </Collapsible>
      )
    }
    
    const { queryByText, queryByTestId } = render(<TestWrapper />)
    
    const button = queryByTestId('button')
    
    expect(queryByText('content')).not.toBeOnTheScreen()
    
    fireEvent.press(button)
    expect(queryByText('content')).toBeOnTheScreen()
    
    fireEvent.press(button)
    expect(queryByText('content')).not.toBeOnTheScreen()
  })
})
