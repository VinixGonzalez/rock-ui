import React, { FC } from 'react';
import BaseCreatable, {
  CreatableProps as BaseCreatableProps,
} from 'react-select/creatable';
import { Props } from 'react-select';

export { BaseCreatableProps as CreatableProps };

export const CreatableSelect: FC<BaseCreatableProps<any> & Props> = props => (
  <BaseCreatable {...props} />
);
