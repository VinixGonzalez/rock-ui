import React, { FC } from 'react';
import {
  NumberIncrementStepper as BaseNumberIncrementStepper,
  NumberIncrementStepperProps as BaseNumberIncrementStepperProps,
} from '@chakra-ui/core';

export { BaseNumberIncrementStepperProps as NumberIncrementStepperProps };

export const NumberIncrementStepper: FC<BaseNumberIncrementStepperProps> = ({
  children,
  ...props
}) => (
  <BaseNumberIncrementStepper {...props}>{children}</BaseNumberIncrementStepper>
);
