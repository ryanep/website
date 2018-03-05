import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Loader = ({ size }) => (
  <div
    className={styles.loader}
    style={{
      width: size,
      height: size
    }}
  >
    <div className={styles.hide}>Loading...</div>
  </div>
);

Loader.propTypes = {
  size: PropTypes.string
};

Loader.defaultProps = {
  size: '2.5rem'
};

export default Loader;
