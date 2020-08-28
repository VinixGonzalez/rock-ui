import React, { FC } from 'react';
import BaseSelect, { Props } from 'react-select';
import makeAnimated from 'react-select/animated';

interface SelectProps extends Props {
  components?: any;
}

export const Select: FC<SelectProps> = props => <BaseSelect {...props} />;

export { makeAnimated, SelectProps };
