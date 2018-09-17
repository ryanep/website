import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-markdown';
import Wrap from '@components/wrap';
import styles from './style.scss';

const HomeAbout = ({ image, imageAlt, title, desc }) => (
  <div className={styles.about}>
    <Wrap>
      <img
        src={image}
        width="120"
        height="120"
        className={styles.photo}
        alt={imageAlt}
      />
      <h2 className={styles.heading}>
        {title}
      </h2>
      <Markdown source={desc} className={styles.info} />
    </Wrap>
  </div>
);

HomeAbout.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

HomeAbout.defaultProps = {};

export default HomeAbout;
