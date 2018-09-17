import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const HomeExperienceIcon = ({ colour, name, image }) => (
  <li className={styles.item}>
    <div
      className={styles.icon}
      style={{ backgroundColor: colour }}
      title={name}
    >
      <img
        src={image}
        width="50"
        height="50"
        className={styles.image}
        alt={name}
      />
    </div>
  </li>
);

HomeExperienceIcon.propTypes = {
  colour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

HomeExperienceIcon.defaultProps = {};

export default HomeExperienceIcon;
