import { FC } from 'react';
import { SwitchThumb, SwitchTrack } from './components';
import { SwitchSize, SwitchVariant } from './types.ts';
import { useSharedValue } from 'react-native-reanimated';
import { SwitchAnimationProvider, SwitchProvider } from './providers';
import { useControlledState } from '@vega-ui/hooks';

export interface SwitchProps {
  /**
   * Switch size – predefined or custom pixel height.
   */
  size?: SwitchSize
  
  /**
   * Visual style variant.
   */
  variant?: SwitchVariant
  
  /**
   * Controlled checked state.
   */
  value?: boolean
  
  /**
   * Uncontrolled initial checked state.
   */
  defaultChecked?: boolean
  
  /**
   * Called when the value changes.
   */
  onValueChange?: (value: boolean) => void
  
  /**
   * Disables interaction and visual feedback.
   */
  disabled?: boolean
  
  /**
   * Padding inside the track (thumb margin).
   */
  padding?: number
}

/** A Switch is a UI component that allows users to toggle between two opposing states, such as on and off, typically representing a binary setting or preference. */
export const Switch: FC<SwitchProps> = ({
  size = 'large',
  variant = 'primary',
  value,
  defaultChecked = false,
  onValueChange,
  disabled = false,
  padding = 2,
}) => {
  const [active, setActive] = useControlledState(value, defaultChecked, onValueChange)
  
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  return (
    <SwitchAnimationProvider trackHeight={height} trackWidth={width}>
      <SwitchProvider padding={padding} disabled={disabled} active={active} size={size} variant={variant}>
        <SwitchTrack onChange={setActive}>
          <SwitchThumb />
        </SwitchTrack>
      </SwitchProvider>
    </SwitchAnimationProvider>
  )
}