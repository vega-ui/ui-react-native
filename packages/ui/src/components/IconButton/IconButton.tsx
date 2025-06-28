import { FC } from 'react';
import { BaseButton, BaseButtonIcon, BaseButtonProps } from '../BaseButton';
import { getButtonBorderRadius, getButtonIconSize, getButtonSizeStyles } from './styles';
import { StyleSheet } from 'react-native';

export interface IconButtonProps extends BaseButtonProps {
  /**
   * Border radius ratio for the button, determines the curvature of the button's corners.
   * Default is 0.333 (1/3 of the button's height).
   */
  brRatio?: number;
  
  /**
   * Size of the icon button. Can be 'small', 'medium', or 'large'.
   * Adjusts the overall size of the button and the icon.
   */
  size?: 'small' | 'medium' | 'large';
}

/**
 * IconButton is a UI component that combines an icon with a button, allowing for interactive actions.
 * It supports customizable size, border radius, and an optional icon inside.
 */
export const IconButton: FC<IconButtonProps> = ({ children, size = 'medium', style, brRatio = 0.333, ...props }) => {
  const styles = getButtonSizeStyles()
  const br = getButtonBorderRadius(styles[size].height, brRatio)
  
  return (
    <BaseButton style={({ pressed }) => [styles[size], buttonStyles.button, { borderRadius: br }, typeof style === 'function' ? style({ pressed }) : style]} {...props}>
      {({ pressed }) => (
        <BaseButtonIcon size={getButtonIconSize()[size]}>
          {typeof children === 'function' ? children({ pressed }) : children}
        </BaseButtonIcon>
      )}
    </BaseButton>
  )
}

const buttonStyles = StyleSheet.create({
  button: {
    aspectRatio: 1
  }
})