export interface Theme {
  background: string
  focus: string
  text: string
  textInverse: string
  light: string
  dark: string
  error: string
  
  gray: {
    0: string
    50: string
    100: string
    150: string
    200: string
    250: string
    300: string
    350: string
    400: string
    450: string
    500: string
    550: string
    600: string
    650: string
    700: string
    750: string
    800: string
    850: string
    900: string
    950: string
    1000: string
  },
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