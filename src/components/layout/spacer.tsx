import React, { FC } from 'react';
import {
  Spacer as BaseSpacer,
  SpacerProps as BaseSpacerProps,
} from '@chakra-ui/core';

export { BaseSpacerProps as SpacerProps };

export const Spacer: FC<BaseSpacerProps> = ({ children, ...props }) => (
  <BaseSpacer {...props}>{children}</BaseSpacer>
);
