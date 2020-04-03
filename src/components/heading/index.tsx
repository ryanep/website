import React from 'react';
import { HeadingProps } from './types';
import * as styled from './styles';

export const Heading: React.FC<HeadingProps> = React.memo(({ as, type, text }) => {
  return <styled.Heading type={type} as={as ?? type}>{text}</styled.Heading>;
});
