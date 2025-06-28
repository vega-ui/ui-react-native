export type BaseButtonVariant = 'primary' | 'secondary'
export type BaseButtonAppearance = 'fill' | 'ghost' | 'transparent' | 'outline'
export type BaseButtonTypes = `${BaseButtonVariant}${Capitalize<BaseButtonAppearance>}`