import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const FooterLink = ({ title, url, icon }) => (
  <styled.FooterLink href={url} target="_blank" rel="noopener noreferrer">
    <styled.Icon svg={icon} />
    <styled.Hide>{title}</styled.Hide>
  </styled.FooterLink>
);

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

FooterLink.defaultPropss = {};

export default FooterLink;
