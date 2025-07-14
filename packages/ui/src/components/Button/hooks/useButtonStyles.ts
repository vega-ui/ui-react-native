import { ButtonSize } from '../types.ts';
import { getButtonBorderRadius, getButtonSizeStyles } from '../styles';
import { StyleProp, ViewStyle } from 'react-native';
import { useStyle } from '../../../shared/hooks';

export const useButtonStyles = (size: ButtonSize, brRatio: number): StyleProp<ViewStyle> => {
  
  return useStyle(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    const br = getButtonBorderRadius(sizeStyles.height, brRatio)
    
    return {
      borderRadius: br,
      ...sizeStyles,
    }
  }, [brRatio, size])
}