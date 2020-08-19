import React, { FC } from 'react';
import {
  StackDivider as BaseStackDivider,
  StackProps as BaseStackDividerProps,
} from '@chakra-ui/core';

export { BaseStackDividerProps as StackDividerProps };

export const StackDivider: FC<BaseStackDividerProps> = ({
  children,
  ...props
}) => <BaseStackDivider {...props}>{children}</BaseStackDivider>;
