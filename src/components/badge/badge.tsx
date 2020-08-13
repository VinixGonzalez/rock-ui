import React, { FC } from 'react';
import {
  Badge as BaseBadge,
  BadgeProps as BaseBadgeProps,
} from '@chakra-ui/core';

export { BaseBadgeProps as BadgeProps };

export const Badge: FC<BaseBadgeProps> = ({ children, ...props }) => (
  <BaseBadge {...props}>{children}</BaseBadge>
);
