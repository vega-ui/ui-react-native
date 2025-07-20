import { FC } from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { StyleSheet } from 'react-native';
import { IconButtonSize } from './types.ts';
import { IconButtonProvider } from './providers';
import { useIconButtonStyles } from './hooks';

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
  size?: IconButtonSize;
}

/**
 * IconButton is a UI component that combines an icon with a button, allowing for interactive actions.
 * It supports customizable size, border radius, and an optional icon inside.
 */
export const IconButton: FC<IconButtonProps> = ({ children, size = 'medium', style, brRatio = 0.333, ...props }) => {
  const iconButtonStyles = useIconButtonStyles(size, brRatio)
  
  return (
    <IconButtonProvider size={size}>
      <BaseButton style={({ pressed }) => [iconButtonStyles.iconButton, buttonStyles.button, typeof style === 'function' ? style({ pressed }) : style]} {...props}>
        {({ pressed }) => (
          typeof children === 'function' ? children({ pressed }) : children
        )}
      </BaseButton>
    </IconButtonProvider>
  )
}

const buttonStyles = StyleSheet.create({
  button: {
    aspectRatio: 1
  },
})