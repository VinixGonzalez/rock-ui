import React, { FC } from 'react';
import {
  Avatar as BaseAvatar,
  AvatarProps as BaseAvatarProps,
} from '@chakra-ui/core';

export { BaseAvatarProps as AvatarProps };

export const Avatar: FC<BaseAvatarProps> = ({ children, ...props }) => (
  <BaseAvatar {...props}>{children}</BaseAvatar>
);
