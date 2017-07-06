import React from 'react';
import ExperienceIcon from './experience-icon';
import styles from './style.scss';

export default ({ title, desc, icons }) =>
  <section id={'experience'} className={styles.experience}>
    <div className={styles.wrap}>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.desc}>
        {desc}
      </p>
      <ul className={styles.icons}>
        {icons.map((icon, index) => <ExperienceIcon key={index} data={icon} />)}
      </ul>
    </div>
  </section>;
