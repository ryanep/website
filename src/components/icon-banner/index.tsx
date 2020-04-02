import React from 'react';
import { Wrap } from '~/components/wrap';
import { Spacer } from '~/components/spacer';
import { Heading } from '~/components/heading';
import { LogoBannerProps } from './types';
import * as styled from './styles';

export const IconBanner: React.FC<LogoBannerProps> = ({
  heading,
  description,
  items
}) => {
  return (
    <styled.Banner>
      <Wrap>
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description>{description}</styled.Description>
        <Spacer size="large" />
        <styled.Icons>
          {items.map(({ node }) => (
            <styled.Icon key={node.id} name={node.name} colour={node.colour}>
              <styled.IconImage src={node.icon.file.url} alt={node.icon.title} width="20" />
            </styled.Icon>
          ))}
        </styled.Icons>
      </Wrap>
    </styled.Banner>
  );
};
