import React from 'react';
import FooterLink from '../footer-link';
import styles from './style.scss';
import githubIcon from './icons/github.svg';
import dribbbleIcon from './icons/dribbble.svg';
import twitterIcon from './icons/twitter.svg';
import linkedInIcon from './icons/linkedin.svg';

const footerLinks = [
  {
    id: '1',
    class: 'github',
    url: '//github.com/ryanep',
    title: 'GitHub',
    icon: githubIcon
  },
  {
    id: '2',
    class: 'twitter',
    url: '//twitter.com/ryanep2',
    title: 'Twitter',
    icon: twitterIcon
  },
  {
    id: '3',
    class: 'linkedin',
    url: '//www.linkedin.com/in/ryanep/',
    title: 'LinkedIn',
    icon: linkedInIcon
  },
  {
    id: '4',
    class: 'dribbble',
    url: 'https://dribbble.com/ryanep/',
    title: 'Dribbble',
    icon: dribbbleIcon
  }
];

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.wrap}>
      <div className={styles.copyright}>
        © Ryan Elliott-Potter {new Date().getFullYear()}. All rights reserved.
      </div>
      <div className={styles.icons}>
        {footerLinks.map(link => (
          <FooterLink key={link.id} {...link} />
        ))}
      </div>
    </div>
  </footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
