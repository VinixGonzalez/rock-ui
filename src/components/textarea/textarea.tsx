import React, { FC } from 'react';
import {
  Textarea as BaseTextarea,
  TextareaProps as BaseTextareaProps,
} from '@chakra-ui/core';

export { BaseTextareaProps as TextareaProps };

export const Textarea: FC<BaseTextareaProps> = ({ children, ...props }) => (
  <BaseTextarea {...props}>{children}</BaseTextarea>
);
