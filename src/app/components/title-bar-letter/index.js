import React from 'react';
import PropTypes from 'prop-types';
import * as styled from './styled';

const TITLE_LETTER_ANIMATION_DELAY = 20;

const TitleBarLetter = ({ index, letter }) => (
  <styled.TitleBarLetter delay={index / TITLE_LETTER_ANIMATION_DELAY}>
    {letter}
  </styled.TitleBarLetter>
);

TitleBarLetter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired
};

TitleBarLetter.defaultProps = {};

export default TitleBarLetter;
