import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './style.scss';

const TitleLetter = ({ index, letter }) =>
  <span className={styles.letter} style={{ animationDelay: `${index / 40}s` }}>
    {letter}
  </span>;

TitleLetter.propTypes = {
  index: PropTypes.number.isRequired,
  letter: PropTypes.string.isRequired
};

export default TitleLetter;
