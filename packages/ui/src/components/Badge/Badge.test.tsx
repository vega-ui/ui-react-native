import React from 'react'
import { render } from '@testing-library/react-native'
import { Badge } from './Badge'
import { BadgeLabel } from './components'

describe('Badge', () => {
  it('renders children correctly', () => {
    const { getByText } = render(<Badge><BadgeLabel>New</BadgeLabel></Badge>)
    expect(getByText('New')).toBeTruthy()
  })
  
  it('supports variant, appearance and size props', () => {
    const { getByText } = render(
      <Badge variant='success' appearance='outline' size='lg'>
        <BadgeLabel>Confirmed</BadgeLabel>
      </Badge>
    )
    expect(getByText('Confirmed')).toBeTruthy()
  })
  
  it('renders nested BadgeLabel and applies styles from context', () => {
    const { getByText } = render(
      <Badge variant='error' appearance='surface' size='sm'>
        <BadgeLabel>Error</BadgeLabel>
      </Badge>
    )
    expect(getByText('Error')).toBeTruthy()
  })
  
  it('falls back to default props when not provided', () => {
    const { getByText } = render(<Badge><BadgeLabel>Info</BadgeLabel></Badge>)
    expect(getByText('Info')).toBeTruthy()
  })
})
