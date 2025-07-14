import { FC } from 'react';
import { LayoutChangeEvent, Pressable, StyleSheet, ViewProps } from 'react-native';
import { useSwitchPressAnimations, useSwitchTrackSizeStyle, useSwitchTrackStyles } from './hooks';
import Animated from 'react-native-reanimated';
import { useSwitchAnimationContext, useSwitchContext } from '../../hooks';
import { usePressAnimation } from '../../../../shared/hooks';

export interface SwitchTrackProps extends ViewProps {
  onChange?: (value: boolean) => void
}

export const SwitchTrack: FC<SwitchTrackProps> = ({ onChange, style, children, ...props }) => {
  const { pressed: sharedPressed, onPressIn, onPressOut } = usePressAnimation()
  const { variant, size, active, disabled, padding } = useSwitchContext()
  const { trackHeight, trackWidth } = useSwitchAnimationContext()
  
  const switchStyle = useSwitchTrackSizeStyle(size, padding)
  
  const {
    enabled: enabledStyle,
    disabled: disabledStyle,
    pressed: pressedStyle,
    active: activeStyle
  } = useSwitchTrackStyles({ variant })
  
  const { animatedStyle } = useSwitchPressAnimations({
    enabledStyle,
    disabledStyle,
    pressedStyle,
    activeStyle,
    pressed: sharedPressed,
    active,
    disabled,
  })
  
  const onLayout = (e: LayoutChangeEvent) => {
    trackHeight.value = e.nativeEvent.layout.height
    trackWidth.value = e.nativeEvent.layout.width
  }
  
  return (
    <Pressable
      role='switch'
      accessibilityState={{ disabled, checked: active }}
      onPress={() => onChange?.(!active)}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
    >
      <Animated.View
        style={[styles.track, switchStyle, animatedStyle, style]}
        onLayout={onLayout}
        {...props}
      >
        {children}
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  track: {
    boxSizing: 'border-box',
    justifyContent: 'center'
  }
})