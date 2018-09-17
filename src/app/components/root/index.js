import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Root = ({ children }) => <styled.Root>{children}</styled.Root>;

Root.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired
};

Root.defaultProps = {};

export default Root;
