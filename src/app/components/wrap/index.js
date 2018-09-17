import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Wrap = ({ children, width }) => (
  <styled.Wrap width={width}>{children}</styled.Wrap>
);

Wrap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  width: PropTypes.string
};

Wrap.defaultProps = {
  width: '128rem'
};

export default Wrap;
