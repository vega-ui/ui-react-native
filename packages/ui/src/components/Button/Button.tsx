import { FC } from 'react';
import { BaseButton, BaseButtonProps } from '../BaseButton';
import { getButtonBorderRadius, getButtonSizeStyles } from './styles';
import { ButtonProvider } from './providers';

export interface ButtonProps extends BaseButtonProps {
  brRatio?: number
  size?: 'small' | 'medium' | 'large'
  paddingInline?: number
  paddingBlock?: number
}

export const Button: FC<ButtonProps> = ({ children, size = 'medium', style, brRatio = 0.333, ...props }) => {
  const styles = getButtonSizeStyles()
  const br = getButtonBorderRadius(styles[size].height, brRatio)
  
  return (
    <BaseButton style={({ pressed }) => [styles[size], { borderRadius: br }, typeof style === 'function' ? style({ pressed }) : style]} {...props}>
      {({ pressed }) => (
        <ButtonProvider size={size}>
          {typeof children === 'function' ? children({ pressed }) : children}
        </ButtonProvider>
      )}
    </BaseButton>
  )
}