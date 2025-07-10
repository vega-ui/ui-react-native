'use client';
import { FC, PropsWithChildren, useMemo } from 'react';
import { AlertContext, AlertContextState } from './context.ts'; 

type AlertProviderProps = AlertContextState

export const AlertProvider: FC<PropsWithChildren<AlertProviderProps>> = ({ variant, appearance, children }) => {
  const value = useMemo(() => ({
    variant, appearance
  }), [variant, appearance])

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  )
}