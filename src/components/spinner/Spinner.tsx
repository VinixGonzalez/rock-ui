import React, { FC } from 'react';
import {
  Spinner as BaseSpinner,
  SpinnerProps as BaseSpinnerProps,
} from '@chakra-ui/core';

export { BaseSpinnerProps as SpinnerProps };

export const Spinner: FC<BaseSpinnerProps> = ({ children, ...props }) => (
  <BaseSpinner {...props}>{children}</BaseSpinner>
);
