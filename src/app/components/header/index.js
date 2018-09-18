import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Header = ({ isBanner, heading, description, children }) => (
  <styled.Header isBanner={isBanner}>
    {children}

    {isBanner && (
      <styled.Heading>
        <styled.Title>{heading}</styled.Title>
        <styled.Description>{description}</styled.Description>
      </styled.Heading>
    )}
  </styled.Header>
);

Header.propTypes = {
  isBanner: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

Header.defaultProps = {};

export default Header;
