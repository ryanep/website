import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Bubble = ({ left, top, transform }) => (
  <div
    className={styles.bubble}
    style={{
      left,
      top,
      transform
    }}
  />
);

Bubble.propTypes = {
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  transform: PropTypes.string.isRequired
};

Bubble.defaultProps = {};

export default Bubble;
