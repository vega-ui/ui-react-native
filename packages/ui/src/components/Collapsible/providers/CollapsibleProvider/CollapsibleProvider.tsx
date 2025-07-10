import { FC, PropsWithChildren, useMemo } from 'react';
import { CollapsibleContext, type CollapsibleContextState } from './context.ts';

export type CollapsibleProviderProps = CollapsibleContextState

export const CollapsibleProvider: FC<PropsWithChildren<CollapsibleProviderProps>> = ({ onOpen, onClose, opened, children }) => {
  const value = useMemo(() => ({
    onOpen, onClose, opened
  }), [onOpen, onClose, opened])

  return (
    <CollapsibleContext.Provider value={value}>
      {children}
    </CollapsibleContext.Provider>
  )
}