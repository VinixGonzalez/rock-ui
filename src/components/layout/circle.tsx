import React, { FC } from 'react';
import {
  Circle as BaseCircle,
  SquareProps as BaseCircleProps,
} from '@chakra-ui/core';

export { BaseCircleProps as CircleProps };

export const Circle: FC<BaseCircleProps> = ({ children, ...props }) => (
  <BaseCircle {...props}>{children}</BaseCircle>
);
