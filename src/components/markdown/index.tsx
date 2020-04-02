import React from 'react';
import { MarkdownProps } from './types';
import * as styled from './styles';

export const Markdown: React.FC<MarkdownProps> = ({ className, source }) => {
  return <styled.Markdown source={source} className={className} />;
};
