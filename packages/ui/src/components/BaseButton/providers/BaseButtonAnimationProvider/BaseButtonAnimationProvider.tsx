import { FC, PropsWithChildren, useMemo } from 'react';
import { BaseButtonAnimationContext, BaseButtonAnimationContextState } from './context.ts';

export type BaseButtonAnimationProviderProps = BaseButtonAnimationContextState

export const BaseButtonAnimationProvider: FC<PropsWithChildren<BaseButtonAnimationProviderProps>> = ({ pressed, children }) => {
  const value = useMemo(() => ({
   pressed,
  }), [pressed])

  return (
    <BaseButtonAnimationContext.Provider value={value}>
      {children}
    </BaseButtonAnimationContext.Provider>
  )
}