import { FC, PropsWithChildren, useMemo } from 'react';
import { SwitchAnimationContext, SwitchAnimationContextState } from './context.ts';

export type SwitchAnimationProviderProps = SwitchAnimationContextState

export const SwitchAnimationProvider: FC<PropsWithChildren<SwitchAnimationProviderProps>> = ({ trackHeight, trackWidth, children }) => {
  const value = useMemo(() => ({
   trackHeight, trackWidth,
  }), [])

  return (
    <SwitchAnimationContext.Provider value={value}>
      {children}
    </SwitchAnimationContext.Provider>
  )
}