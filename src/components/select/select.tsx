import React, { FC } from 'react';
import BaseSelect from 'react-select';
import makeAnimated from 'react-select/animated';

export const Select: FC = ({ children, ...props }) => (
  <BaseSelect {...props}>{children}</BaseSelect>
);

export { makeAnimated };
