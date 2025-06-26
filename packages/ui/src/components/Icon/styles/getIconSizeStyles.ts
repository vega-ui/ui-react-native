export const getIconSizeStyles = (size: '4xs' | '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl') => {
  const sizes = {
    '4xs': 8,
    '3xs': 10,
    '2xs': 12,
    'xs': 14,
    'sm': 16,
    'md': 18,
    'lg': 22,
    'xl': 28,
  } as const
  
  return sizes[size]
}