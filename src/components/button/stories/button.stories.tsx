import React from 'react';

import { Button, ButtonProps } from '../';

export default {
  title: 'Button',
};

export const Default = (props?: Partial<ButtonProps>) => <Button {...props} />;

export const basic = () => <Button type="button">Basic button</Button>;

export const reset = () => <Button type="reset">Reset button</Button>;
