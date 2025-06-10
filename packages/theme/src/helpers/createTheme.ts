import { DeepPartial, Theme } from '../types.ts';
import { deepMerge } from './deepMerge.ts';
import { lightTheme } from '../constants';

export const createTheme = (theme: DeepPartial<Theme>, extendedTheme = lightTheme): Theme => {
  return deepMerge(extendedTheme, theme) as Theme
}