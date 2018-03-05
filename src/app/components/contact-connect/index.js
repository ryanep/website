import React from 'react';
import styles from './style.scss';

const ContactConnect = () => (
  <div className={styles.connect}>
    <div className={styles.wrap}>
      <h1 className={styles.heading}>Connect with me</h1>
      <p className={styles.desc}>
        You can connect with me on a number of accounts
      </p>
    </div>
  </div>
);

ContactConnect.propTypes = {};

ContactConnect.defaultPropss = {};

export default ContactConnect;
