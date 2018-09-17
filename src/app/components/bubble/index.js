import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const Bubble = ({ left, top, size }) => (
  <styled.Bubble
    left={left}
    top={top}
    size={size}
  />
);

Bubble.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired
};

Bubble.defaultProps = {};

export default Bubble;
