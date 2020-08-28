import React, { FC } from 'react';
import BaseAsyncSelect, { AsyncProps } from 'react-select/async';
import { Props } from 'react-select';

export { AsyncProps };

export const AsyncSelect: FC<AsyncProps<any> & Props> = props => (
  <BaseAsyncSelect {...props} />
);
