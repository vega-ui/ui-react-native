'use client';

import { createContext } from 'react';
import { BadgeAppearance, BadgeSize, BadgeVariant } from '../../types.ts';

export interface BadgeContextState {
  variant: BadgeVariant
  appearance: BadgeAppearance
  size: BadgeSize
}

export const defaultBadgeContext: BadgeContextState = {
  variant: 'info',
  appearance: 'fill',
  size: 'md'
}

export const BadgeContext = createContext<BadgeContextState>(defaultBadgeContext)