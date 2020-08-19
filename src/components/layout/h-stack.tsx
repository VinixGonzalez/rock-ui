import React, { FC } from 'react';
import {
  HStack as BaseHStack,
  StackProps as BaseHStackProps,
} from '@chakra-ui/core';

export { BaseHStackProps as HStackProps };

export const HStack: FC<BaseHStackProps> = ({ children, ...props }) => (
  <BaseHStack {...props}>{children}</BaseHStack>
);
