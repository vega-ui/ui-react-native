import { getButtonBorderRadius, getButtonSizes, getButtonSizeStyles } from '../styles';
import { IconButtonSize } from '../types.ts';
import { useStyle } from '../../../shared/hooks';

export const useIconButtonStyles = (size: IconButtonSize, brRatio: number) => {
  const br = getButtonBorderRadius(getButtonSizes()[size], brRatio)

  return useStyle(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    
    return {
      iconButton: {
        borderRadius: br,
        ...sizeStyles,
      }
    }
  }, [br, size])
}