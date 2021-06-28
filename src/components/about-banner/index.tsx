import React from 'react';
import { Heading } from '#/components/heading';
import { Spacer } from '#/components/spacer';
import { Wrap } from '#/components/wrap';
import { AboutBannerProps } from './types';
import * as styled from './styles';

export const AboutBanner: React.FC<AboutBannerProps> = React.memo(
  ({ heading, description, image }) => {
    return (
      <styled.Banner>
        <Wrap>
          <styled.Image src={image.url} alt={image.title} />
          <Spacer size="small" />

          <Heading type="h2" text={heading} />
          <Spacer size="medium" />

          <styled.Description source={description} />
        </Wrap>
      </styled.Banner>
    );
  }
);
