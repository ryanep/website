import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import styles from './style.scss';

const HomeWorkItem = ({ url, desc, inProgress, image, imageAlt }) => (
  <div className={styles.work}>
    <LazyLoad width={300} height={200}>
      <a href={url} className={styles.link} target="_blank">
        {inProgress && <div className={styles.progress}>In progress</div>}
        <img src={image} alt={imageAlt} className={styles.image} />
      </a>
    </LazyLoad>
    <p className={styles.desc}>{desc}</p>
  </div>
);

HomeWorkItem.propTypes = {
  url: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

HomeWorkItem.defaultProps = {};

export default HomeWorkItem;
