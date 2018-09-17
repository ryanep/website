import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TITLE_LETTER_ANIMATION_DELAY = 40;

const TitleBarLetter = ({ index, letter }) => (
  <span
    className={styles.letter}
    style={{ animationDelay: `${index / TITLE_LETTER_ANIMATION_DELAY}s` }}
  >
    {letter}
  </span>
);

TitleBarLetter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired
};

TitleBarLetter.defaultProps = {};

export default TitleBarLetter;
