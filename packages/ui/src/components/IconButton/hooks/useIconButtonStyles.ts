import { getButtonBorderRadius, getButtonSizes, getButtonSizeStyles } from '../styles';
import { IconButtonSize } from '../types.ts';
import { StyleProp, ViewStyle } from 'react-native';
import { useStyle } from '../../../shared/hooks';

export const useIconButtonStyles = (size: IconButtonSize, brRatio: number): StyleProp<ViewStyle> => {
  const br = getButtonBorderRadius(getButtonSizes()[size], brRatio)

  return useStyle(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    
    return {
      borderRadius: br,
      ...sizeStyles,
    }
  }, [br])
}