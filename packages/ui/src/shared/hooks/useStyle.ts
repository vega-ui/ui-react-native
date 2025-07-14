import { DependencyList, useMemo } from 'react'
import { ViewStyle, TextStyle, ImageStyle } from 'react-native'

export type Style = ViewStyle | TextStyle | ImageStyle

export const useStyle = (
  styles: () => Style,
  props: DependencyList = [],
): Style => useMemo(styles, props)