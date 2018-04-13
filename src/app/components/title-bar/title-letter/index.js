import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TITLE_LETTER_ANIMATION_DELAY = 40;

const TitleLetter = ({ index, letter }) => (
  <span
    className={styles.letter}
    style={{ animationDelay: `${index / TITLE_LETTER_ANIMATION_DELAY}s` }}
  >
    {letter}
  </span>
);

TitleLetter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired
};

TitleLetter.defaultProps = {};

export default TitleLetter;
