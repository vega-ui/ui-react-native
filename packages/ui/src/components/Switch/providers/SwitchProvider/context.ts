import { Context, createContext } from 'react';
import { SwitchSize, SwitchVariant } from '../../types.ts';

export interface SwitchContextState {
  variant: SwitchVariant
  size: SwitchSize
  active: boolean
  disabled: boolean
  padding?: number
}

export const defaultSwitchContext: SwitchContextState = {
  variant: 'primary',
  size: 'large',
  disabled: false,
  active: false,
  padding: 2,
}

export const SwitchContext: Context<SwitchContextState> = createContext(defaultSwitchContext)