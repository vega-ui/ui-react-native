import { FC, useMemo } from 'react';
import { ButtonSize } from '../types.ts';
import { getButtonBorderRadius, getButtonSizeStyles } from '../styles';
import { StyleProp, ViewStyle } from 'react-native';

export const useButtonStyles = (size: ButtonSize, brRatio: number): StyleProp<ViewStyle> => {
  return useMemo(() => {
    const sizeStyles = getButtonSizeStyles()[size]
    const br = getButtonBorderRadius(sizeStyles.height, brRatio)
    
    return ({
      borderRadius: br,
      ...sizeStyles,
    })
  }, [brRatio, size])
}