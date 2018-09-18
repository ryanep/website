import React from 'react';
import PropTypes from 'prop-types';
import Loader from '@components/loader';
import * as styled from './styled';

const Button = ({ name, type, isLoading }) => (
  <styled.Button type={type} isLoading={isLoading} disabled={isLoading}>
    {name}
    {isLoading && <Loader />}
  </styled.Button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Button;
