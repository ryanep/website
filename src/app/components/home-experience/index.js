import React from 'react';
import PropTypes from 'prop-types';
import ExperienceIcon from './experience-icon';
import styles from './style.scss';

const HomeExperience = ({ title, desc, icons }) => (
  <section id="experience" className={styles.experience}>
    <div className={styles.wrap}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <ul className={styles.icons}>
        {icons.map(icon => <ExperienceIcon key={icon.id} {...icon} />)}
      </ul>
    </div>
  </section>
);

HomeExperience.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(PropTypes.shape(ExperienceIcon.propTypes).isRequired)
    .isRequired
};

HomeExperience.defaultProps = {};

export default HomeExperience;
