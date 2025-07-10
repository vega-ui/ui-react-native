import { FC, ReactNode } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';
import { AlertAppearance, AlertVariant } from './types.ts';
import { radiuses, spacings } from '@vega-ui/tokens';
import { useAlertStyles } from './hooks';
import { AlertIcon, AlertTitle } from './components';
import { AlertProvider } from './providers';

export interface AlertProps extends ViewProps {
  /**
   * The content of the alert.
   * Accepts a single React node or an array of nodes.
   */
  children?: ReactNode | ReactNode[]
  
  /**
   * Optional content rendered at the icon slot of the alert.
   * Useful for renderings custom icons.
   * Pass `false` to hide the icon entirely.
   */
  iconSlot?: ReactNode | ReactNode[]
  
  /**
   * Optional content rendered at the end of the alert.
   * Useful for action buttons, close icons, or links.
   */
  endSlot?: ReactNode | ReactNode[]
  
  /**
   * The main title or headline of the alert.
   * This is required and displayed prominently.
   */
  title: string
  
  /**
   * Visual style of the alert.
   * Determines background color, border, and icon style.
   *
   * - 'success': Indicates a positive or successful action
   * - 'error': Indicates an error or failure
   * - 'warning': Indicates a caution or risk
   * - 'info': Neutral informational message
   */
  variant?: AlertVariant
  
  /**
   * Visual appearance of the badge.
   * Defines how the badge is styled (background, border, etc.).
   */
  appearance?: AlertAppearance
}

export const Alert: FC<AlertProps> = ({
  variant = 'info',
  appearance = 'fill',
  iconSlot,
  children,
  title,
  endSlot,
}) => {
  const alertStyles = useAlertStyles(variant, appearance)
  
  return (
    <AlertProvider variant={variant} appearance={appearance}>
      <View style={[styles.alert, alertStyles]}>
        {iconSlot !== false && iconSlot ? iconSlot : <AlertIcon variant={variant} appearance={appearance} />}
        <View>
          <AlertTitle variant={variant} appearance={appearance}>
            {title}
          </AlertTitle>
          {children}
        </View>
        {endSlot}
      </View>
    </AlertProvider>
  )
}

const styles = StyleSheet.create({
  alert: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingBlock: spacings()['6'],
    paddingInline: spacings()['12'],
    borderRadius: radiuses()['4'],
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'transparent',
    gap: spacings()['8'],
    boxSizing: 'border-box',
  },
})