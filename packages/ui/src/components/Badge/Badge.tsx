import { FC, ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { BadgeAppearance, BadgeSize, BadgeVariant } from './types.ts';
import { spacings } from '@vega-ui/tokens';
import { useBadgeStyles } from './hooks';
import { BadgeProvider } from './providers';

export interface BadgeProps extends ViewProps {
  /**
   * The content of the alert.
   * Accepts a single React node or an array of nodes.
   */
  children?: ReactNode | ReactNode[]
  
  /**
   * Visual style of the alert.
   * Determines background color, border, and icon style.
   *
   * - 'success': Indicates a positive or successful action
   * - 'error': Indicates an error or failure
   * - 'warning': Indicates a caution or risk
   * - 'info': Neutral informational message
   */
  variant?: BadgeVariant
  
  /**
   * Visual appearance of the badge.
   * Defines how the badge is styled (background, border, etc.).
   */
  appearance?: BadgeAppearance
  
  /**
   * Visual size of the text, typically mapped to the design system’s type scale.
   */
  size?: BadgeSize
}

export const Badge: FC<BadgeProps> = ({
  variant = 'info',
  appearance = 'fill',
  size = 'md',
  children,
}) => {
  const badgeStyles = useBadgeStyles(variant, appearance, size)
  
  return (
    <BadgeProvider size={size} variant={variant} appearance={appearance}>
      <View style={[styles.badge, badgeStyles]}>
        {children}
      </View>
    </BadgeProvider>
  )
}

const styles = StyleSheet.create({
  badge: {
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
    gap: spacings()['8'],
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
  },
})