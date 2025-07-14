import { FC, PropsWithChildren, useMemo } from 'react';
import { SwitchContext, SwitchContextState } from './context.ts';

export type SwitchProviderProps = SwitchContextState

export const SwitchProvider: FC<PropsWithChildren<SwitchProviderProps>> = ({ padding, size, variant, disabled, active, children }) => {
  const value = useMemo(() => ({
   variant, disabled, active, size, padding,
  }), [variant, disabled, active, size, padding])

  return (
    <SwitchContext.Provider value={value}>
      {children}
    </SwitchContext.Provider>
  )
}