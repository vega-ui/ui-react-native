import { FC, PropsWithChildren, ReactElement, Ref } from 'react';
import { Text } from '../../../Text';
import { CollapsibleTrigger } from '../../../Collapsible';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { ChevronDown } from '@vega-ui/icons-react-native'
import { useCollapsibleContext } from '../../../Collapsible/hooks';
import Animated from 'react-native-reanimated';
import { Icon } from '../../../Icon';
import { useAccordionTriggerArrowAnimations, useAccordionTriggerStyles } from './hooks';
import { useAccordionContext } from '../../hooks';

export interface AccordionTriggerProps {
  /**
   * Optional class name for the trigger button element.
   */
  style?: StyleProp<ViewStyle>
  
  /**
   * Optional class name for the outer wrapper (`Heading` component).
   */
  wrapperStyle?: StyleProp<ViewStyle>
  
  /**
   * Optional class name for the arrow icon wrapper.
   */
  arrowIconStyle?: StyleProp<ViewStyle>
  
  /**
   * Custom arrow icon to display instead of the default.
   */
  arrowIcon?: ReactElement
  
  /**
   * Ref to the internal `button` element used for the trigger.
   */
  ref?: Ref<View>
}

const AnimatedChevronDown = Animated.createAnimatedComponent(ChevronDown)

export const AccordionTrigger: FC<PropsWithChildren<AccordionTriggerProps>> = ({
  style,
  wrapperStyle,
  arrowIconStyle,
  arrowIcon,
  children,
}) => {
  const { opened } = useCollapsibleContext()
  const { size = 'medium' } = useAccordionContext()
  const { animatedStyle } = useAccordionTriggerArrowAnimations({ opened })
  const accordionTriggerStyles = useAccordionTriggerStyles(size)
  
  return (
    <Text role='heading' style={wrapperStyle} aria-level={3} accessible>
      <CollapsibleTrigger style={[styles.trigger, style, accordionTriggerStyles]}>
        {children}
        {arrowIcon
          ? arrowIcon
          : <Icon style={arrowIconStyle} size='sm'><AnimatedChevronDown style={animatedStyle} /></Icon>
        }
      </CollapsibleTrigger>
    </Text>
  )
}

const styles = StyleSheet.create({
  trigger: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  }
})