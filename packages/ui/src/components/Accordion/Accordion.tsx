import { Children, FC, PropsWithChildren } from 'react';
import { useControlledState } from '@vega-ui/hooks';
import { AccordionSize } from './types.ts';
import { AccordionProvider } from './providers';
import { StyleSheet, View, ViewProps } from 'react-native';

export interface AccordionProps extends ViewProps {
  /**
   * Controlled list of opened item values.
   * When provided, the accordion becomes controlled and ignores internal state.
   */
  opened?: string[]
  
  /**
   * Initial list of opened item values (uncontrolled).
   * Used only on first render if `opened` is not provided.
   */
  defaultOpened?: string[]
  
  /**
   * Callback triggered when the list of opened items changes.
   *
   * @param opened - Array of values corresponding to opened items.
   */
  onChangeOpen?: (opened: string[]) => void
  
  /**
   * Allows multiple accordion items to be opened simultaneously.
   * If false (default), only one item can be opened at a time.
   */
  multiple?: boolean
  
  /**
   * Adds visual separators between accordion items.
   * Can be overridden per item via the `separated` prop on `AccordionItem`.
   */
  separated?: boolean
  
  /**
   * Controls the size of all accordion items.
   * Affects padding, icon size, and typography within each item.
   */
  size?: AccordionSize
}

export const Accordion: FC<PropsWithChildren<AccordionProps>> = ({
  opened,
  defaultOpened = [],
  onChangeOpen,
  multiple = false,
  separated = true,
  size = 'medium',
  children,
  style,
  ...props
}) => {
  const [openedKeys, setOpenedKeys] = useControlledState<string[]>(opened, defaultOpened, onChangeOpen)
  
  const open = (value: string) => {
    setOpenedKeys(multiple ? [...openedKeys, value] : [value])
  }
  
  const close = (value: string) => {
    setOpenedKeys(openedKeys.filter(v => v !== value))
  }
  
  const onChangeOpened = (value: string, state: boolean) => {
    if (!state) close(value)
    else open(value)
  }
  
  return (
    <AccordionProvider count={Children.count(children)} opened={openedKeys} onChangeOpened={onChangeOpened} separated={separated} size={size}>
      <View style={[styles.accordion, style]} role='list' {...props}>
        {children}
      </View>
    </AccordionProvider>
  )
}

const styles = StyleSheet.create({
  accordion: {
    width: '100%'
  }
})