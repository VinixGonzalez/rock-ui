import React, { FC } from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@chakra-ui/core';

export { BaseButtonProps as ButtonProps };

export const Button: FC<BaseButtonProps> = ({ children, ...props }) => (
  <BaseButton {...props}>{children}</BaseButton>
);
