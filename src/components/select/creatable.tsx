import React, { FC } from 'react';
import BaseCreatable, { CreatableProps } from 'react-select/creatable';

export { CreatableProps };

export const CreatableSelect: FC<CreatableProps<any>> = props => (
  <BaseCreatable {...props} />
);
