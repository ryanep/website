import React from 'react';
import SVGInline from 'react-svg-inline';
import styles from './style.scss';

export default ({ title, url, icon }) =>
  <a href={url} target={'_blank'} className={styles.link}>
    <SVGInline svg={icon} className={styles.icon} />
    <div className={styles.hide}>
      {title}
    </div>
  </a>;
