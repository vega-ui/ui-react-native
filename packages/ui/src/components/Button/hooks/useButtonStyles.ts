import { ButtonSize } from '../types.ts';
import { getButtonBorderRadius, getButtonSizeStyles } from '../styles';
import { useStyle } from '../../../shared/hooks';

export const useButtonStyles = (size: ButtonSize, brRatio: number) => {
  return useStyle(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    const br = getButtonBorderRadius(sizeStyles.height, brRatio)
    
    return {
      button: {
        borderRadius: br,
        ...sizeStyles,
      }
    }
  }, [brRatio, size])
}