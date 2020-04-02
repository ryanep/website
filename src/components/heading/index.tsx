import React from 'react';
import { HeadingProps } from './types';
import * as styled from './styles';

export const Heading: React.FC<HeadingProps> = ({ as, type, text }) => {
  return <styled.Heading type={type} as={as}>{text}</styled.Heading>;
};
