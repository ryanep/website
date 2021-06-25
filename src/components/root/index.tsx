import React from 'react';
import Helmet from 'react-helmet';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { RootProps } from './types';
import * as styled from './styles';

const navLinks = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
];

export const Root: React.FC<RootProps> = React.memo(({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <link rel="icon" href="//cdn.ryanep.com/favicon.ico" />
      </Helmet>
      <styled.Global />
      <Header showNav={false} navLinks={navLinks} />
      {children}
      <Footer />
    </div>
  );
});
