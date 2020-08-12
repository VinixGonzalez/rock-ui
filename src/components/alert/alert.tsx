import React, { FC } from 'react';
import {
  Alert as BaseAlert,
  AlertProps as BaseAlertProps,
} from '@chakra-ui/core';

export { BaseAlertProps as AlertProps };

export const Alert: FC<BaseAlertProps> = ({ children, ...props }) => (
  <BaseAlert {...props}>{children}</BaseAlert>
);
