import { Context, createContext } from 'react';

export interface BaseButtonContextState {
  variant: 'primary' | 'secondary'
  appearance: 'fill' | 'outline' | 'ghost' | 'transparent'
  disabled?: boolean
  pressed?: boolean
}

export const defaultBaseButtonContext: BaseButtonContextState = {
  appearance: 'fill',
  variant: 'primary',
  disabled: false,
  pressed: false,
}

export const BaseButtonContext: Context<BaseButtonContextState> = createContext(defaultBaseButtonContext)