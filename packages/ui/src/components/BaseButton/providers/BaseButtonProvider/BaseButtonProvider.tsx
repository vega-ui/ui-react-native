import { FC, PropsWithChildren, useMemo } from 'react';
import { BaseButtonContext, BaseButtonContextState } from './context.ts';

export type BaseButtonProviderProps = BaseButtonContextState

export const BaseButtonProvider: FC<PropsWithChildren<BaseButtonProviderProps>> = ({ variant, disabled, pressed, appearance, children }) => {
  const value = useMemo(() => ({
   appearance, variant, disabled, pressed,
  }), [appearance, variant, disabled, pressed])

  return (
    <BaseButtonContext.Provider value={value}>
      {children}
    </BaseButtonContext.Provider>
  )
}