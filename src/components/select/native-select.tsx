import React, { FC } from 'react';
import {
  Select as BaseSelect,
  SelectProps as BaseSelectProps,
} from '@chakra-ui/core';

export { BaseSelectProps as NativeSelectProps };

export const NativeSelect: FC<BaseSelectProps> = ({ children, ...props }) => (
  <BaseSelect {...props}>{children}</BaseSelect>
);
