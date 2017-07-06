import React from 'react';
import TimelineItem from './timeline-item';
import styles from './style.scss';

export default ({ title, desc, timeline }) =>
  <section className={styles.timeline}>
    <div className={styles.wrap}>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.desc}>
        {desc}
      </p>
      <div className={styles.items}>
        {timeline.map((item, index) => <TimelineItem key={index} {...item} />)}
      </div>
    </div>
  </section>;
