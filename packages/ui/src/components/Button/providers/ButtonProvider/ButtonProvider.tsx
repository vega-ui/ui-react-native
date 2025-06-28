import { FC, PropsWithChildren, useMemo } from 'react';
import { ButtonContext, ButtonContextState } from './context.ts';

export type ButtonProviderProps = ButtonContextState

export const ButtonProvider: FC<PropsWithChildren<ButtonProviderProps>> = ({ size, children }) => {
  const value = useMemo(() => ({
   size,
  }), [size])

  return (
    <ButtonContext.Provider value={value}>
      {children}
    </ButtonContext.Provider>
  )
}