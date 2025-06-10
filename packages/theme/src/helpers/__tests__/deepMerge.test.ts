import { deepMerge } from '../deepMerge'
import { expect, describe, it } from 'vitest'

describe('deepMerge', () => {
  it('merges flat objects', () => {
    const base = { a: 1, b: 2 }
    const override = { b: 3 }
    expect(deepMerge(base, override)).toEqual({ a: 1, b: 3 })
  })
  
  it('merges nested objects', () => {
    const base = { a: { x: 1, y: 2 }, b: 2 }
    const override = { a: { y: 99 } }
    expect(deepMerge(base, override)).toEqual({ a: { x: 1, y: 99 }, b: 2 })
  })
  
  it('preserves base if override is undefined', () => {
    const base = { a: 42 }
    const override = { a: undefined }
    expect(deepMerge(base, override)).toEqual({ a: 42 })
  })
  
  it('merges deeply nested structures', () => {
    const base = { a: { b: { c: 1, d: 2 } } }
    const override = { a: { b: { d: 999 } } }
    expect(deepMerge(base, override)).toEqual({ a: { b: { c: 1, d: 999 } } })
  })
  
  it('does not mutate base', () => {
    const base = { a: { b: 1 } }
    const override = { a: { b: 2 } }
    const result = deepMerge(base, override)
    expect(result).not.toBe(base)
    expect(base).toEqual({ a: { b: 1 } }) // untouched
  })
})
