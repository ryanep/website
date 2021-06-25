import React from 'react';
import { MarkdownProps } from './types';
import * as styled from './styles';

export const Markdown: React.FC<MarkdownProps> = React.memo(
  ({ className, source }) => {
    return <styled.Markdown className={className}>{source}</styled.Markdown>;
  }
);
