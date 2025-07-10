import React from 'react'
import { render, fireEvent } from '@testing-library/react-native'
import { Accordion } from './Accordion'
import { Text } from '../Text';
import { AccordionItem, AccordionTrigger, AccordionTriggerLabel, AccordionContent } from './components'

describe('Accordion', () => {
  it('renders all items and toggles content on press', () => {
    const { getByText, queryByText } = render(
      <Accordion>
        <AccordionItem position={1} value='1'>
          <AccordionTrigger>
            <AccordionTriggerLabel>First</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Content 1</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem position={2} value='2'>
          <AccordionTrigger>
            <AccordionTriggerLabel>Second</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Content 2</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    
    const firstTrigger = getByText('First')
    const secondTrigger = getByText('Second')
    
    expect(queryByText('Content 1')).not.toBeVisible()
    expect(queryByText('Content 2')).not.toBeVisible()
    
    fireEvent.press(firstTrigger)
    expect(getByText('Content 1')).toBeVisible()
    
    fireEvent.press(secondTrigger)
    expect(getByText('Content 2')).toBeVisible()
    expect(queryByText('Content 1')).not.toBeVisible()
  })
  
  it('allows multiple items to stay open if multiple=true', () => {
    const { getByText } = render(
      <Accordion multiple>
        <AccordionItem position={1} value='1'>
          <AccordionTrigger>
            <AccordionTriggerLabel>One</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Content 1</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem position={2} value='2'>
          <AccordionTrigger>
            <AccordionTriggerLabel>Two</AccordionTriggerLabel>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Content 2</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
    
    fireEvent.press(getByText('One'))
    fireEvent.press(getByText('Two'))
    
    expect(getByText('Content 1')).toBeVisible()
    expect(getByText('Content 2')).toBeVisible()
  })
})
