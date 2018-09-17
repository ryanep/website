import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import HomeExperienceIcon from '@components/home-experience-icon';
import styles from './style.scss';

const HomeExperience = ({ title, desc, icons }) => (
  <section id="experience" className={styles.experience}>
    <Wrap>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.desc}>
        {desc}
      </p>
      <ul className={styles.icons}>
        {icons.map(icon => (
          <HomeExperienceIcon key={icon.id} {...icon} />
        ))}
      </ul>
    </Wrap>
  </section>
);

HomeExperience.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape(HomeExperienceIcon.propTypes).isRequired
  ).isRequired
};

HomeExperience.defaultProps = {};

export default HomeExperience;
