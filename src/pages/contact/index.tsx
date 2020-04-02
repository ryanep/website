import React from 'react';
import { Root } from '~/components/root';
import { TitleBanner } from '~/components/title-banner';

export const ContactPage: React.FC = () => {
  return (
    <Root>
      <TitleBanner heading="Contact" />
    </Root>
  );
};

export default ContactPage;
