import { Context, createContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

export interface BaseButtonAnimationContextState {
  pressed?: SharedValue<number>
}

export const defaultBaseButtonAnimationContext: BaseButtonAnimationContextState = {
  pressed: undefined,
}

export const BaseButtonAnimationContext: Context<BaseButtonAnimationContextState> = createContext(defaultBaseButtonAnimationContext)