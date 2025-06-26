import { Children, cloneElement, FC, isValidElement, ReactElement, ReactNode, Ref } from 'react';
import { mergeProps } from '@vega-ui/utils';
import { View, ViewProps } from 'react-native';

export interface SlotProps extends ViewProps, Record<string, unknown> {
  children?: ReactNode
  ref?: Ref<View>
}

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