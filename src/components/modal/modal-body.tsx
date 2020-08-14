import React, { FC } from 'react';
import {
  ModalBody as BaseModalBody,
  ModalBodyProps as BaseModalBodyProps,
} from '@chakra-ui/core';

export { BaseModalBodyProps as ModalBodyProps };

export const ModalBody: FC<BaseModalBodyProps> = ({ children, ...props }) => (
  <BaseModalBody {...props}>{children}</BaseModalBody>
);
