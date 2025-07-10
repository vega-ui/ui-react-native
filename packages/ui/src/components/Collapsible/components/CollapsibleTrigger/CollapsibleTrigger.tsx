import React, { FC } from 'react';
import { useCollapsibleContext } from '../../hooks';
import { Pressable, PressableProps } from 'react-native';
import { Slot } from '../../../Slot';

export interface CollapsibleTriggerProps extends PressableProps {
  /**
   * If true, renders the trigger as a child component using `Slot`.
   * This allows integrating the trigger behavior into custom components,
   * such as buttons or other pressable elements.
   */
  asChild?: boolean
}

export const CollapsibleTrigger: FC<CollapsibleTriggerProps> = ({ children, asChild, ...props }) => {
  const { onOpen, onClose, opened } = useCollapsibleContext()
  
  const Element = asChild ? Slot<PressableProps> : Pressable
  
  const onPress = () => {
    if (opened) onClose()
     else onOpen()
  }
  
  return (
    <Element onPress={onPress} role='button' {...props}>
      {children}
    </Element>
  )
}