import React, { Component } from 'react';
import FooterLink from './footer-link';
import styles from './style.scss';
import githubIcon from './icons/github.svg';
import dribbbleIcon from './icons/dribbble.svg';
import twitterIcon from './icons/twitter.svg';
import linkedInIcon from './icons/linkedin.svg';

export default class Footer extends Component {
  render() {
    const footerLinks = [
      {
        class: 'github',
        url: '//github.com/ryanep',
        title: 'GitHub',
        icon: githubIcon
      },
      {
        class: 'twitter',
        url: '//twitter.com/ryanep2',
        title: 'Twitter',
        icon: twitterIcon
      },
      {
        class: 'linkedin',
        url: '//www.linkedin.com/in/ryanep/',
        title: 'LinkedIn',
        icon: linkedInIcon
      },
      {
        class: 'dribbble',
        url: 'https://dribbble.com/ryanep/',
        title: 'Dribbble',
        icon: dribbbleIcon
      }
    ];

    return (
      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.copyright}>
            © Ryan Elliott-Potter {new Date().getFullYear()}. All rights
            reserved.
          </div>
          <div className={styles.icons}>
            {footerLinks.map((link, index) =>
              <FooterLink key={index} {...link} />
            )}
          </div>
        </div>
      </footer>
    );
  }
}
