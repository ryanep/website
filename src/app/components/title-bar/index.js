import React from 'react';
import PropTypes from 'prop-types';
import TitleLetter from './title-letter';
import styles from './style.scss';

const TitleBar = ({ heading }) =>
  <div className={styles.bar}>
    <div className={styles.wrap}>
      <h1 className={styles.heading}>
        {heading
          .split('')
          .map((letter, index) =>
            <TitleLetter key={index} index={index} letter={letter} />
          )}
      </h1>
    </div>
  </div>;

TitleBar.propTypes = {
  heading: PropTypes.string.isRequired
};

export default TitleBar;
