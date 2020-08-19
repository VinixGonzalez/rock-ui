import React, { FC } from 'react';
import {
  AspectRatio as BaseAspectRatio,
  AspectRatioProps as BaseAspectRatioProps,
} from '@chakra-ui/core';

export { BaseAspectRatioProps as AspectRatioProps };

export const AspectRatio: FC<BaseAspectRatioProps> = ({
  children,
  ...props
}) => <BaseAspectRatio {...props}>{children}</BaseAspectRatio>;
