import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

export default ({ url, icon, company, time, role }) =>
  <Link to={url} className={styles.link}>
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
  </Link>;
