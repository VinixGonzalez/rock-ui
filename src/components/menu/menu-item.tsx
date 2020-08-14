import React, { FC } from 'react';
import {
  MenuItem as BaseMenuItem,
  MenuItemProps as BaseMenuItemProps,
} from '@chakra-ui/core';

export { BaseMenuItemProps as MenuItemProps };

export const MenuItem: FC<BaseMenuItemProps> = ({ children, ...props }) => (
  <BaseMenuItem {...props}>{children}</BaseMenuItem>
);
