import React, { FC } from 'react';
import {
  MenuOptionGroup as BaseMenuOptionGroup,
  MenuOptionGroupProps as BaseMenuOptionGroupProps,
} from '@chakra-ui/core';

export { BaseMenuOptionGroupProps as MenuOptionGroupProps };

export const MenuOptionGroup: FC<BaseMenuOptionGroupProps> = ({
  children,
  ...props
}) => <BaseMenuOptionGroup {...props}>{children}</BaseMenuOptionGroup>;
