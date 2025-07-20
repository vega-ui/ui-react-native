import { DependencyList, useMemo } from 'react'
import { ViewStyle, TextStyle, ImageStyle, StyleSheet } from 'react-native'

export type Style = ViewStyle | TextStyle | ImageStyle

export type NamedStyles = {
  [key: string]: Style;
};

export const useStyle = <T extends NamedStyles>(
  styles: T | (() => T),
  props: DependencyList = [],
): T => useMemo(() => StyleSheet.create(typeof styles === 'function' ? styles() : styles), props)