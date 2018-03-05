import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Wrap = ({ children, width }) => (
  <div className={styles.wrap} style={{ maxWidth: width }}>
    {children}
  </div>
);

Wrap.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  width: PropTypes.string
};

Wrap.defaultProps = {
  width: '128rem'
};

export default Wrap;
