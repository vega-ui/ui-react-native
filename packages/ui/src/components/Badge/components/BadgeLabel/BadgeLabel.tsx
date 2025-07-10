import { FC } from 'react';
import { Text, TextProps } from '../../../Text';
import { useBadgeContext, useBadgeLabelColor } from '../../hooks';
import { getBadgeLabelSize } from '../../styles';

export type BadgeLabelProps = TextProps

export const BadgeLabel: FC<BadgeLabelProps> = ({ children, ...props }) => {
  const { variant, appearance, size } = useBadgeContext()
  const color = useBadgeLabelColor(variant, appearance)
  
  return (
    <Text color={color} size={getBadgeLabelSize(size)} {...props}>{children}</Text>
  )
}