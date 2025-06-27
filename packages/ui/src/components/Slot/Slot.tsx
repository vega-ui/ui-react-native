import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode, Ref } from 'react';
import { mergeProps } from '@vega-ui/utils';
import { View, ViewProps } from 'react-native';

export interface SlotProps extends ViewProps, Record<string, unknown> {
  /**
   * The content that will be rendered inside the Slot component.
   * Can be any valid ReactNode such as text, components, or JSX.
   */
  children?: ReactNode;
  
  /**
   * Reference to the View component used in the Slot.
   * Allows direct access to the underlying view for manipulation or animation.
   */
  ref?: Ref<View>;
}


/**
 * Slot is a container component that renders its children, allowing flexible content placement.
 */
export const Slot: FC<SlotProps> = ({ children, ref, ...props }) => {
  const child = Children.only(children);

  if (!isValidElement(child)) {
    throw new Error('[Slot] `asChild` must be a valid React-element.');
  }

  const elementToClone = children as ReactElement<{ [p: string]: unknown }>
  
  return cloneElement(
    elementToClone,
    mergeProps(props, { ref }, elementToClone.props ?? {})
  )
}