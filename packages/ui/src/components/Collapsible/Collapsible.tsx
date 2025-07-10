import { FC, ReactElement, useCallback } from 'react';
import { CollapsibleProvider } from './providers';
import { useControlledState } from '@vega-ui/hooks';

export interface CollapsibleProps {
  /**
   * Controls whether the collapsible content is expanded.
   * If provided, the component acts as a controlled component.
   */
  open?: boolean
  
  /**
   * Sets the initial open state when the component is uncontrolled.
   * Ignored if `open` is provided.
   */
  defaultOpen?: boolean
  
  /**
   * Callback fired when the open state changes.
   * Called with the next boolean value when toggled.
   */
  onChangeOpen?: (value: boolean) => void
  
  /**
   * If true, renders as a child component using `Slot`.
   */
  asChild?: boolean;
  
  /**
   * The content to render inside the collapsible container.
   * Can be a single node or a list of React nodes.
   */
  children?: ReactElement | ReactElement[];
}

/**
 * Collapsible is a fundamental button component that handles interaction and visual styling.
 * It supports different variants, appearances, and customization of pressable styles.
 */
export const Collapsible: FC<CollapsibleProps> = ({
  children,
  open,
  defaultOpen = false,
  onChangeOpen,
}) => {
  const [opened, setOpened] = useControlledState(open, defaultOpen, onChangeOpen)
  
  const onOpen = useCallback(() => {
    setOpened(true)
  }, [])
  
  const onClose = useCallback(() => {
    setOpened(false)
  }, [])

  return (
    <CollapsibleProvider onOpen={onOpen} onClose={onClose} opened={opened}>
      {children}
    </CollapsibleProvider>
  )
}