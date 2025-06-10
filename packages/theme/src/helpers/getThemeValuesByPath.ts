import { PathValue } from '../types.ts';

export const getThemeValueByPath = <T extends object, P extends string>(obj: T, path: P): PathValue<T, P> => {
  return path
    .split('.')
    .reduce((acc, key) => {
      if (acc && typeof acc === 'object' && key in acc) {
        return (acc as Record<string, unknown>)[key]
      }
      return undefined
    }, obj as unknown) as PathValue<T, P>
}