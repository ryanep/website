import React from 'react';
import { MarkdownProps } from './types';
import * as styled from './styles';

export const Markdown = React.memo(({ className, source }: MarkdownProps) => {
  return <styled.Markdown className={className}>{source}</styled.Markdown>;
});
