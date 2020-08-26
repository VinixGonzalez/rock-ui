import React, { FC } from 'react';
import {
  FormErrorMessage as BaseFormErrorMessage,
  FormErrorMessageProps as BaseFormErrorMessageProps,
} from '@chakra-ui/core';

export { BaseFormErrorMessageProps as FormErrorMessageProps };

export const FormErrorMessage: FC<BaseFormErrorMessageProps> = ({
  children,
  ...props
}) => <BaseFormErrorMessage {...props}>{children}</BaseFormErrorMessage>;
