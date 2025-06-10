import { describe, it, expect } from 'vitest'
import { createTheme } from '../createTheme'
import { lightTheme } from '../../constants'

describe('createTheme', () => {
  it('merges lightTheme with background override', () => {
    const theme = createTheme({ background: 'red' })
    
    expect(theme.background).toBe('red')
    expect(theme.text).toBe(lightTheme.text)
    expect(theme.textInverse).toEqual(lightTheme.textInverse)
  })
  
  it('preserves deep nested values', () => {
    const theme = createTheme({
      gray: {
        150: 'green'
      }
    })
    
    expect(theme.gray['150']).toBe('green')
    expect(theme.background).toBe(lightTheme.background)
    expect(theme.text).toBe(lightTheme.text)
  })
  
  it('does not mutate lightTheme', () => {
    const copy = JSON.parse(JSON.stringify(lightTheme))
    createTheme({ background: 'blue' })
    expect(lightTheme).toEqual(copy)
  })
})
