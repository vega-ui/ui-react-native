import { TextSize } from '../../../../../Text/types.ts';

type SizeMapperType = 'small' | 'medium' | 'large';

const mapperHeadingSize: Record<SizeMapperType, TextSize> = {
  'small': 3,
  'medium': 4,
  'large': 5,
} as const;

export const sizeMapper = (type: SizeMapperType) => mapperHeadingSize[type]