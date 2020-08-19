import React, { FC } from 'react';
import {
  Stack as BaseStack,
  StackProps as BaseStackProps,
} from '@chakra-ui/core';

export { BaseStackProps as StackProps };

export const Stack: FC<BaseStackProps> = ({ children, ...props }) => (
  <BaseStack {...props}>{children}</BaseStack>
);
