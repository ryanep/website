import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Loader = ({ isLoading }) =>
  <div className={isLoading ? styles.loader : styles.hidden}>
    <div className={styles.hide}>Loading...</div>
  </div>;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default Loader;
