import React, { FC } from 'react';
import { ModalCloseButton as BaseModalCloseButton } from '@chakra-ui/core';

export const ModalCloseButton: FC = ({ children, ...props }) => (
  <BaseModalCloseButton {...props}>{children}</BaseModalCloseButton>
);
