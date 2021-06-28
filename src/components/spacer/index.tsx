import React from 'react';
import { SpacerProps } from './types';
import * as styled from './styles';

export const Spacer = React.memo(({ size }: SpacerProps) => {
  return <styled.Spacer size={size} />;
});
