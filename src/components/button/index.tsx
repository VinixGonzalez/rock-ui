import React, { FC, HTMLAttributes, ReactChild } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
  type?: 'submit' | 'button' | 'reset';
}

export const Button: FC<ButtonProps> = ({ children, type }) => (
  <button type={type}>{children}</button>
);

export default Button;
