import React from 'react';
import { SpacerProps } from './types';
import * as styled from './styles';

export const Spacer: React.FC<SpacerProps> = ({ size }) => {
  return <styled.Spacer size={size} />;
};
