import { DeepPartial } from '../types.ts';

const isObject = (val: unknown): val is Record<string, unknown> => {
  return typeof val === 'object' && val !== null
}

export const deepMerge = <T>(base: T, override: DeepPartial<T>): T => {
  if (!override || typeof override !== 'object') return base
  
  const result = { ...base }
  
  for (const key in override) {
    const baseVal = base[key as keyof T]
    const overrideVal = override[key as keyof T]
    
    const bothObjects =
      isObject(baseVal) && isObject(overrideVal) && !Array.isArray(overrideVal)
    
    result[key as keyof T] = bothObjects
      ? deepMerge(baseVal, overrideVal as never)
      : (overrideVal ?? baseVal) as T[typeof key]
  }
  
  return result
}
