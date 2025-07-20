import { FC } from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { ButtonProvider } from './providers';
import { ButtonSize } from './types.ts';
import { useButtonStyles } from './hooks';

export interface ButtonProps extends BaseButtonProps {
  /**
   * Border radius ratio for the button, determines the curvature of the button's corners.
   * Default is 0.333 (1/3 of the button's height).
   */
  brRatio?: number;
  
  /**
   * Size of the button. Can be 'small', 'medium', or 'large'.
   * Adjusts the overall size of the button and the icon inside it (if any).
   */
  size?: ButtonSize;
}

/**
 * Button is a UI component used for triggering actions.
 * It supports customizable size, border radius, and appearance, with optional text or icon content.
 */
export const Button: FC<ButtonProps> = ({ children, size = 'medium', style, brRatio = 0.333, ...props }) => {
  const buttonStyles = useButtonStyles(size, brRatio)
  
  return (
    <BaseButton
      style={({ pressed }) => [
        buttonStyles.button,
        typeof style === 'function' ? style({ pressed }) : style
      ]}
      {...props}
    >
      {({ pressed }) => (
        <ButtonProvider size={size}>
          {typeof children === 'function' ? children({ pressed }) : children}
        </ButtonProvider>
      )}
    </BaseButton>
  )
}