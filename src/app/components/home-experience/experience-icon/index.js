import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const ExperienceIcon = ({ colour, name, image }) => (
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

ExperienceIcon.propTypes = {
  colour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

ExperienceIcon.defaultProps = {};

export default ExperienceIcon;
