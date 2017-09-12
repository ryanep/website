import React from 'react';
import styles from './style.scss';

const Error = () =>
  <main className={styles.error}>
    <h1 className={styles.heading}>Error 404</h1>
    <p className={styles.desc}>The page you are looking for does not exist.</p>
  </main>;

Error.propTypes = {};

export default Error;
