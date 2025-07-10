'use client';

import { useContext } from 'react';
import { BadgeContext } from '../providers/BadgeProvider/context.ts';

export const useBadgeContext = () => useContext(BadgeContext)