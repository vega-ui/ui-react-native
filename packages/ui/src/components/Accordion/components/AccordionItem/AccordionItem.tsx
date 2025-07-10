import { FC, ReactElement, useCallback } from 'react';
import { Collapsible } from '../../../Collapsible';
import { useAccordionContext } from '../../hooks';
import { AccordionItemProvider } from '../../providers';
import { AccordionSize } from '../../types.ts';
import { View } from 'react-native';
import { Separator } from '../../../Separator';

export interface AccordionItemProps {
  /**
   * Controls whether the accordion item is open (expanded).
   * If provided, the component becomes controlled.
   */
  open?: boolean
  
  /**
   * Callback triggered when the open state changes.
   *
   * @param value - The value of the item
   * @param state - The new open state (`true` = opened, `false` = closed)
   */
  onChangeOpen?: (value: string, state: boolean) => void
  
  /**
   * Unique identifier for this accordion item.
   * Used for managing open state within the accordion group.
   */
  value: string
  
  /**
   * The content inside the accordion item.
   * Will be shown or hidden based on the open state.
   */
  children?: ReactElement | ReactElement[]
  
  /**
   * Adds a visual separator between this item and others in the accordion group.
   * Has no effect when used directly inside an `Accordion`, as separation is handled at the group level.
   */
  separated?: boolean
  
  /**
   * Controls the size of the trigger and affects typography and spacing.
   * Falls back to context value if not provided.
   */
  size?: AccordionSize
  
  /**
   * One-based index of the item within the accordion group.
   * Used internally to determine if the item is the last in the group —
   * primarily to decide whether to render a separator after it.
   */
  position: number
}

export const AccordionItem: FC<AccordionItemProps> = ({
  size,
  onChangeOpen,
  open,
  children,
  separated,
  value,
  position,
}) => {
  const { onChangeOpened, opened, size: _size = 'medium', separated: _separated, count } = useAccordionContext()
  
  const onChange = useCallback((state: boolean) => {
    onChangeOpen?.(value, state)
    onChangeOpened?.(value, state)
  }, [value, onChangeOpen, onChangeOpened])
  
  const isLast = position === count
  
  return (
    <AccordionItemProvider size={size ?? _size}>
      <View role='listitem'>
        <Collapsible open={open ?? opened.includes(value)} onChangeOpen={onChange}>
          {children}
        </Collapsible>
        {(separated || (!isLast && _separated)) && <Separator />}
      </View>
    </AccordionItemProvider>
  )
}