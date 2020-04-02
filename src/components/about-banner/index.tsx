import React from 'react';
import { Heading } from '~/components/heading';
import { Spacer } from '~/components/spacer';
import { Wrap } from '~/components/wrap';
import { AboutBannerProps } from './types';
import * as styled from './styles';

export const AboutBanner: React.FC<AboutBannerProps> = ({
  heading,
  description
}) => {
  return (
    <styled.Banner>
      <Wrap>
        <styled.Image src="https://cdn.ryanep.com/images/me.jpg" />
        <Spacer size="small" />
        <Heading type="h2" text={heading} />
        <Spacer size="small" />
        <styled.Description source={description} />
      </Wrap>
    </styled.Banner>
  );
};

export default AboutBanner;
