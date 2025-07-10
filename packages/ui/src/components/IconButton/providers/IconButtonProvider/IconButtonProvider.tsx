import { FC, PropsWithChildren, useMemo } from 'react';
import { IconButtonContext, IconButtonContextState } from './context.ts';

export type IconButtonProviderProps = IconButtonContextState

export const IconButtonProvider: FC<PropsWithChildren<IconButtonProviderProps>> = ({ size, children }) => {
  const value = useMemo(() => ({
   size,
  }), [size])

  return (
    <IconButtonContext.Provider value={value}>
      {children}
    </IconButtonContext.Provider>
  )
}