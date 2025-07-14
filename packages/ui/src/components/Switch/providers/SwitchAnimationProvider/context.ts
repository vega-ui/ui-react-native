import { createContext } from 'react';
import { SharedValue } from 'react-native-reanimated';

export interface SwitchAnimationContextState {
  trackWidth: SharedValue<number>
  trackHeight: SharedValue<number>
}

export const defaultSwitchAnimationContext: SwitchAnimationContextState = {
  trackWidth: undefined!,
  trackHeight: undefined!
}

export const SwitchAnimationContext = createContext<SwitchAnimationContextState>(defaultSwitchAnimationContext)