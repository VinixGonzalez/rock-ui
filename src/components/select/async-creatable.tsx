import React, { FC } from 'react';
import BaseAsyncCreatable, { Props } from 'react-select/async-creatable';

export { Props as AsyncCreatableProps };

export const AsyncCreatableSelect: FC<Props<any>> = props => (
  <BaseAsyncCreatable {...props} />
);
