import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Wrap = ({ children, width }) =>
  <div className={styles.wrap} style={{ width }}>
    {children}
  </div>;

Wrap.propTypes = {
  children: PropTypes.array.isRequired,
  width: PropTypes.string
};

export default Wrap;
