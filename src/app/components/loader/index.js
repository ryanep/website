import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Loader = ({ size }) => (
  <styled.Loader size={size}>
    <styled.Hide>Loading...</styled.Hide>
  </styled.Loader>
);

Loader.propTypes = {
  size: PropTypes.string
};

Loader.defaultProps = {
  size: '2.5rem'
};

export default Loader;
