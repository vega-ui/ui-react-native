'use client';

import { useContext } from 'react';
import { AlertContext } from '../providers/AlertProvider/context.ts';

export const useAlertContext = () => useContext(AlertContext)