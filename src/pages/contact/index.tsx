import React from 'react';
import Helmet from 'react-helmet';
import { Root } from '~/components/root';
import { TitleBanner } from '~/components/title-banner';

export const ContactPage: React.FC = () => {
  return (
    <Root>
      <Helmet title="Full-stack JavaScript Developer - Ryan Elliott-Potter" />
      <TitleBanner heading="Contact" />
    </Root>
  );
};

export default ContactPage;
