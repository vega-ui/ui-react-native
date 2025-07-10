'use client';

import { createContext } from 'react';
import { AlertAppearance, AlertVariant } from '../../types.ts';

export interface AlertContextState {
  variant: AlertVariant
  appearance: AlertAppearance
}

export const defaultAlertContext: AlertContextState = {
  variant: 'info',
  appearance: 'fill',
}

export const AlertContext = createContext<AlertContextState>(defaultAlertContext)