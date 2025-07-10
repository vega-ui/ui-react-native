import { getButtonBorderRadius, getButtonSizes, getButtonSizeStyles } from '../styles';
import { IconButtonSize } from '../types.ts';
import { StyleProp, ViewStyle } from 'react-native';
import { useMemo } from 'react';

export const useIconButtonStyles = (size: IconButtonSize, brRatio: number): StyleProp<ViewStyle> => {
  const br = getButtonBorderRadius(getButtonSizes()[size], brRatio)

  return useMemo(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    
    return {
      borderRadius: br,
      ...sizeStyles,
    }
  }, [size])
}