import React, { FC } from 'react';
import {
  InputGroup as BaseInputGroup,
  InputGroupProps as BaseInputGroupProps,
} from '@chakra-ui/core';

export { BaseInputGroupProps as InputGroupProps };

export const InputGroup: FC<BaseInputGroupProps> = ({ children, ...props }) => (
  <BaseInputGroup {...props}>{children}</BaseInputGroup>
);
