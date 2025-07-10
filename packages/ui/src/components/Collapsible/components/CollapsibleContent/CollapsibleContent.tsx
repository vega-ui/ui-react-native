import { FC, Ref } from 'react';
import Animated from 'react-native-reanimated';
import { StyleProp, StyleSheet, View, ViewProps, ViewStyle } from 'react-native';
import { useCollapsibleContext } from '../../hooks';
import { useCollapsibleContentAnimation } from './hooks';

export interface CollapsibleContentProps extends ViewProps {
  /**
   * Ref to the outer `Animated.View` wrapper.
   */
  ref?: Ref<View>
  
  /**
   * Additional styles applied to the outer wrapper (`Animated.View`).
   * Use this to customize layout or animation-related styles.
   */
  wrapperStyle?: StyleProp<ViewStyle>
}

export const CollapsibleContent: FC<CollapsibleContentProps> = ({ children, ref, style, wrapperStyle, ...props }) => {
  const { opened } = useCollapsibleContext()
  
  const { onLayout, animatedStyle } = useCollapsibleContentAnimation({
    opened
  })
  
  return (
    <Animated.View {...props} ref={ref} style={[animatedStyle, styles.wrapper, wrapperStyle]}>
      <View
        style={[styles.content, style]}
        onLayout={onLayout}
        accessibilityElementsHidden={!opened}
      >
        {children}
      </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    overflow: 'hidden'
  },
  content: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    alignItems: 'center'
  }
})