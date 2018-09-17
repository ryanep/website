import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import HomeWorkItem from '@components/home-work-item';
import styles from './style.scss';

const HomeWork = ({ title, desc, work }) => (
  <section id="work" className={styles.work}>
    <Wrap>
      <h2 className={styles.heading}>
        {title}
      </h2>
      <p className={styles.desc}>
        {desc}
      </p>
      <div className={styles.items}>
        {work.map(item => (
          <HomeWorkItem key={item.id} {...item} />
        ))}
      </div>
    </Wrap>
  </section>
);

HomeWork.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  work: PropTypes.arrayOf(PropTypes.shape(HomeWorkItem.propTypes).isRequired)
    .isRequired
};

HomeWork.defaultProps = {};

export default HomeWork;
