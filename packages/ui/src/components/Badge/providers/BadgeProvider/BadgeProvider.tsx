'use client';
import { FC, PropsWithChildren, useMemo } from 'react';
import { BadgeContext, BadgeContextState } from './context.ts'; 

type BadgeProviderProps = BadgeContextState

export const BadgeProvider: FC<PropsWithChildren<BadgeProviderProps>> = ({ variant, appearance, size, children }) => {
  const value = useMemo(() => ({
    variant, appearance, size
  }), [variant, appearance, size])

  return (
    <BadgeContext.Provider value={value}>
      {children}
    </BadgeContext.Provider>
  )
}