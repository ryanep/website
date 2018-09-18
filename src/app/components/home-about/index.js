import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import * as styled from './styled';

const HomeAbout = ({ image, imageAlt, title, desc }) => (
  <styled.About>
    <Wrap>
      <styled.Photo src={image} width="120" height="120" alt={imageAlt} />
      <styled.Heading>{title}</styled.Heading>
      <styled.Markdown source={desc} />
    </Wrap>
  </styled.About>
);

HomeAbout.propTypes = {
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

HomeAbout.defaultProps = {};

export default HomeAbout;
