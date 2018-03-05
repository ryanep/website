import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TimelineItem = ({ icon, company, time, role }) => (
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
        <div className={styles.company}>{company}</div>
        <div className={styles.time}>{time}</div>
      </header>
      <div className={styles.role}>{role}</div>
    </article>
  </div>
);

TimelineItem.propTypes = {
  icon: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired
};

TimelineItem.defaultProps = {};

export default TimelineItem;
