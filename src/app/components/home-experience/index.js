import React from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import HomeExperienceIcon from '@components/home-experience-icon';
import * as styled from './styled';

const HomeExperience = ({ title, desc, icons }) => (
  <styled.Experience id="experience">
    <Wrap>
      <styled.Heading>{title}</styled.Heading>
      <styled.Description>{desc}</styled.Description>
      <styled.Icons>
        {icons.map(icon => (
          <HomeExperienceIcon key={icon.id} {...icon} />
        ))}
      </styled.Icons>
    </Wrap>
  </styled.Experience>
);

HomeExperience.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape(HomeExperienceIcon.propTypes).isRequired
  ).isRequired
};

HomeExperience.defaultProps = {};

export default HomeExperience;
