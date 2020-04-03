import React from 'react';
import { Logo } from '~/components/logo';
import { Navigation } from '~/components/navigation';
import { HeaderProps } from './types';
import * as styled from './styles';

export const Header: React.FC<HeaderProps> = ({ showNav, navLinks }) => {
  return (
    <styled.Header data-testid="header">
      <styled.Container>
        <styled.Logo to="/">
          <Logo />
        </styled.Logo>
        {showNav && <Navigation links={navLinks} />}
      </styled.Container>
    </styled.Header>
  );
};