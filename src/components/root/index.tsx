import React from 'react';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';
import { RootProps } from './types';
import * as styled from './styles';

const navLinks = [
  {
    url: '/',
    title: 'Home'
  },
  {
    url: '/contact',
    title: 'Contact'
  }
];

export const Root: React.FC<RootProps> = ({ children }) => {
  return (
    <div>
      <styled.Global />
      <Header showNav={false} navLinks={navLinks} />
      {children}
      <Footer />
    </div>
  );
};
