import React from 'react';
import { WrapProps } from './types';
import * as styled from './styles';

export const Wrap: React.FC<WrapProps> = ({ children, className }) => {
  return <styled.Wrap className={className}>{children}</styled.Wrap>;
};
