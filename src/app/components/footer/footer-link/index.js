import React from 'react';
import PropTypes from 'prop-types';
import SVGInline from 'react-svg-inline';
import styles from './style.scss';

const FooterLink = ({ title, url, icon }) =>
  <a href={url} target={'_blank'} className={styles.link}>
    <SVGInline svg={icon} className={styles.icon} />
    <div className={styles.hide}>
      {title}
    </div>
  </a>;

FooterLink.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default FooterLink;
