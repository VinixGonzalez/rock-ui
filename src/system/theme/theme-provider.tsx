import React, { FC } from 'react';
import {
  ThemeProvider as BaseThemeProvider,
  ThemeProviderProps as BaseThemeProviderProps,
} from '@chakra-ui/core';

export { BaseThemeProviderProps as ThemeProviderProps };

export const ThemeProvider: FC<BaseThemeProviderProps> = ({
  children,
  ...props
}) => <BaseThemeProvider {...props}>{children}</BaseThemeProvider>;
