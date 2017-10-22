import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Loader = ({ size, colour }) => (
  <div
    className={styles.loader}
    style={{
      width: size,
      height: size,
      borderColor: colour,
      borderTopColor: 'transparent'
    }}
  >
    <div className={styles.hide}>Loading...</div>
  </div>
);

Loader.propTypes = {
  size: PropTypes.string,
  colour: PropTypes.string
};

export default Loader;
