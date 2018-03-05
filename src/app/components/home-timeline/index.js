import React from 'react';
import PropTypes from 'prop-types';
import TimelineItem from './timeline-item';
import styles from './style.scss';

const HomeTimeline = ({ title, desc, timeline }) => (
  <section className={styles.timeline}>
    <div className={styles.wrap}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.items}>
        {timeline.map(item => <TimelineItem key={item.id} {...item} />)}
      </div>
    </div>
  </section>
);

HomeTimeline.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  timeline: PropTypes.arrayOf(
    PropTypes.shape(TimelineItem.propTypes).isRequired
  ).isRequired
};

HomeTimeline.defaultProps = {};

export default HomeTimeline;
