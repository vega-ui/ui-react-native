type ColorPallet = 0 | 50 | 100 | 150 | 200 | 250 | 300 | 350 | 400 | 450 | 500 | 550 | 600 | 650 | 700 | 750 | 800 | 850 | 900 | 950 | 1000

export interface Theme {
  background: string
  focus: string
  text: string
  textInverse: string
  light: string
  dark: string
  error: string
  white: string
  black: string
  
  gray: Record<ColorPallet, string>,
  blue: Record<ColorPallet, string>,
  green: Record<ColorPallet, string>,
  orange: Record<ColorPallet, string>,
  red: Record<ColorPallet, string>,
  
  primary: Record<ColorPallet, string>,
  secondary: Record<ColorPallet, string>,
  
  disable: {
    text: string
    background: string
    placeholderText: string
    border: string
  }
}

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never

type Leaves<T> = {
  [K in keyof T]: T[K] extends object
    ? Join<K, Leaves<T[K]>>
    : K
}[keyof T]

export type ThemePath = Leaves<Theme>

export type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

export type PathValue<T, P extends string> =
  P extends `${infer Key}.${infer Rest}`
    ? Key extends keyof T
      ? PathValue<T[Key], Rest>
      : never
    : P extends keyof T
      ? T[P]
      : never;