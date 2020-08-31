import React, { FC } from 'react';
import {
  Input as BaseInput,
  InputProps as BaseInputProps,
} from '@chakra-ui/core';

export { BaseInputProps as InputProps };

export const Input: FC<BaseInputProps> = ({ children, ...props }) => (
  <BaseInput {...props}>{children}</BaseInput>
);
