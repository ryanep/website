import React from 'react';
import { ButtonProps } from './types';
import * as styled from './styles';

export const Button: React.FC<ButtonProps> = ({ type, text, onClick }) => {
  return (
    <styled.Button onClick={onClick} type={type}>
      {text}
    </styled.Button>
  );
};
