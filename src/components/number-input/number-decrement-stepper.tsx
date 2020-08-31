import React, { FC } from 'react';
import {
  NumberDecrementStepper as BaseNumberDecrementStepper,
  NumberDecrementStepperProps as BaseNumberDecrementStepperProps,
} from '@chakra-ui/core';

export { BaseNumberDecrementStepperProps as NumberDecrementStepperProps };

export const NumberDecrementStepper: FC<BaseNumberDecrementStepperProps> = ({
  children,
  ...props
}) => (
  <BaseNumberDecrementStepper {...props}>{children}</BaseNumberDecrementStepper>
);
