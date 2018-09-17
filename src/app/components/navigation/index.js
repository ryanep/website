import React from 'react';
import Wrap from '@components/wrap';
import * as styled from './styled';

const Navigation = () => (
  <styled.Nav>
    <Wrap>
      <styled.Content>
        <styled.LogoLink to="/">
          <styled.Logo
            src="//cdn.ryanep.com/images/logo.svg"
            width="80"
            height="30"
            alt="Logo"
          />
        </styled.LogoLink>
      </styled.Content>
    </Wrap>
  </styled.Nav>
);

Navigation.propTypes = {};

Navigation.defaultProps = {};

export default Navigation;
