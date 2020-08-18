import React, { FC } from 'react';
import {
  InputLeftElement as BaseInputLeftElement,
  InputElementProps as BaseInputLeftElementProps,
} from '@chakra-ui/core';

export { BaseInputLeftElementProps as InputLeftElementProps };

export const InputLeftElement: FC<BaseInputLeftElementProps> = props => (
  <BaseInputLeftElement {...props} />
);
