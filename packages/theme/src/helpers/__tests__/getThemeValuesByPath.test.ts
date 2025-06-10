import { getThemeValueByPath } from '../getThemeValuesByPath.ts'
import { describe, it, expect } from 'vitest'

describe('getThemeValueByPath', () => {
  const theme = {
    colors: {
      background: '#ffffff',
      primary: '#ff0000',
    },
    font: {
      size: {
        small: 12,
        large: 18
      }
    }
  }
  
  it('gets top-level value', () => {
    expect(getThemeValueByPath(theme, 'colors')).toEqual(theme.colors)
  })
  
  it('gets nested value', () => {
    expect(getThemeValueByPath(theme, 'colors.primary')).toBe('#ff0000')
    expect(getThemeValueByPath(theme, 'font.size.large')).toBe(18)
  })
  
  it('returns undefined for invalid path', () => {
    expect(getThemeValueByPath(theme, 'colors.invalid')).toBeUndefined()
    expect(getThemeValueByPath(theme, 'font.weight.bold')).toBeUndefined()
  })
  
  it('returns undefined if path partially exists', () => {
    expect(getThemeValueByPath(theme, 'colors.primary.hex')).toBeUndefined()
  })
})
