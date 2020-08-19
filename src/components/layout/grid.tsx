import React, { FC } from 'react';
import { Grid as BaseGrid, GridProps as BaseGridProps } from '@chakra-ui/core';

export { BaseGridProps as GridProps };

export const Grid: FC<BaseGridProps> = ({ children, ...props }) => (
  <BaseGrid {...props}>{children}</BaseGrid>
);
