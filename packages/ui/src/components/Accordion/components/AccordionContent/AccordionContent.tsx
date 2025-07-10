import { FC, PropsWithChildren, Ref } from 'react';
import { CollapsibleContent, CollapsibleContentProps } from '../../../Collapsible';
import { StyleSheet, View } from 'react-native';
import { spacings } from '@vega-ui/tokens';

export interface AccordionContentProps extends CollapsibleContentProps {
  /**
   * Ref to the root View element of the accordion content.
   */
  ref?: Ref<View>
}

export const AccordionContent: FC<PropsWithChildren<AccordionContentProps>> = ({
  ref,
  children,
  style,
  ...props
}) => {
  return (
    <CollapsibleContent {...props} style={[style, styles.content]} ref={ref}>
      {children}
    </CollapsibleContent>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacings()['4']
  }
})