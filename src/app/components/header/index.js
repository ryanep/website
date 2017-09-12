import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const Header = ({ isBanner, heading, description, children }) =>
  <header className={isBanner ? styles.banner : styles.header}>
    {children}

    {isBanner &&
      <div className={styles.heading}>
        <h1 className={styles.title}>
          {heading}
        </h1>
        <p className={styles.desc}>
          {description}
        </p>
      </div>}
  </header>;

Header.propTypes = {
  isBanner: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Header;
