import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const HomeExperienceIcon = ({ colour, name, image }) => (
  <styled.Item>
    <styled.Icon backgroundColor={colour} title={name}>
      <styled.Image src={image} width="50" height="50" alt={name} />
    </styled.Icon>
  </styled.Item>
);

HomeExperienceIcon.propTypes = {
  colour: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

HomeExperienceIcon.defaultProps = {};

export default HomeExperienceIcon;
