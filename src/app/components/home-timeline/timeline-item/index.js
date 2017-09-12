import React from 'react';
import styles from './style.scss';

export default ({ icon, company, time, role }) =>
  <div className={styles.link}>
    <article className={styles.item}>
      <header className={styles.header}>
        <img
          src={icon}
          width="30"
          height="30"
          alt={company}
          className={styles.icon}
        />
        <div className={styles.company}>
          {company}
        </div>
        <div className={styles.time}>
          {time}
        </div>
      </header>
      <div className={styles.role}>
        {role}
      </div>
    </article>
  </div>;
