import React from 'react';
import Wrap from '@components/wrap';
import FooterLink from '@components/footer-link';
import githubIcon from './icons/github.svg';
import dribbbleIcon from './icons/dribbble.svg';
import twitterIcon from './icons/twitter.svg';
import linkedInIcon from './icons/linkedin.svg';
import * as styled from './styled';

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
  <styled.Footer>
    <Wrap>
      <styled.Content>
        <styled.Copyright>
          © Ryan Elliott-Potter
          {' '}
          {new Date().getFullYear()}
          . All rights reserved.
        </styled.Copyright>
        <styled.Icons>
          {footerLinks.map(link => (
            <FooterLink key={link.id} {...link} />
          ))}
        </styled.Icons>
      </styled.Content>
    </Wrap>
  </styled.Footer>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
