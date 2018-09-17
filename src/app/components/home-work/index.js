import React from 'react';
import PropTypes from 'prop-types';
import HomeWorkItem from '@components/home-work-item';
import styles from './style.scss';

const HomeWork = ({ title, desc, work }) => (
  <section id="work" className={styles.work}>
    <div className={styles.wrap}>
      <h2 className={styles.heading}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.items}>
        {work.map(item => (
          <HomeWorkItem key={item.id} {...item} />
        ))}
      </div>
      {/* <Link to={this.props.content.aboutButtonURL} className={styles.button}>
            {this.props.content.aboutButtonText}
        </Link> */}
    </div>
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
