import React from 'react';
import Navigation from '@components/navigation';
import Bubbles from '@components/bubbles';
import styles from './style.scss';

export default ({ path }) =>
  <header className={path === '/' ? styles.banner : styles.header}>
    <Navigation />
    <Bubbles path={path} />

    {path === '/' &&
      <div className={styles.heading}>
        <h1 className={styles.title}>Ryan Elliott-Potter</h1>
        <p className={styles.desc}>Web Developer</p>
      </div>}
  </header>;
