import React from 'react';
import { WrapProps } from './types';
import * as styled from './styles';

export const Wrap: React.FC<WrapProps> = React.memo(({ children, className }) => {
  return <styled.Wrap className={className}>{children}</styled.Wrap>;
});
