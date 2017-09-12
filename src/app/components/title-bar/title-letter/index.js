import React from 'react';
import PropTypes from 'prop-types';
import { TITLE_LETTER_ANIMATION_DELAY } from '@constants/general';
import styles from './style.scss';

const TitleLetter = ({ index, letter }) =>
  <span
    className={styles.letter}
    style={{ animationDelay: `${index / TITLE_LETTER_ANIMATION_DELAY}s` }}
  >
    {letter}
  </span>;

TitleLetter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired
};

export default TitleLetter;
