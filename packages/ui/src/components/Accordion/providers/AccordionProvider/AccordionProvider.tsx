'use client';
import { FC, PropsWithChildren, useMemo } from 'react';
import { AccordionContext, AccordionContextState } from './context.ts'; 

type AccordionProviderProps = AccordionContextState

export const AccordionProvider: FC<PropsWithChildren<AccordionProviderProps>> = ({ opened, count, onChangeOpened, size, separated, children }) => {
  const value = useMemo(() => ({
    opened,
    onChangeOpened,
    size,
    separated,
    count,
  }), [opened, onChangeOpened, size, count, separated])

  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  )
}