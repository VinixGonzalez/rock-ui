import React, { FC } from 'react';
import BaseAsyncSelect, { AsyncProps } from 'react-select/async';

export { AsyncProps };

export const AsyncSelect: FC<AsyncProps<any>> = props => (
  <BaseAsyncSelect {...props} />
);
