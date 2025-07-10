import { Context, createContext } from 'react';

export interface CollapsibleContextState {
  opened: boolean
  onOpen(): void
  onClose(): void
}

export const defaultCollapsibleContext: CollapsibleContextState = {
  opened: false,
  onOpen() {
    return
  },
  onClose() {
    return
  }
}

export const CollapsibleContext: Context<CollapsibleContextState> = createContext(defaultCollapsibleContext)