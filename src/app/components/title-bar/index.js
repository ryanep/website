import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TitleLetter from './title-letter';
import styles from './style.scss';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    const letters = this.props.heading.split('');

    this.state = {
      letters
    };
  }

  render() {
    return (
      <div className={styles.bar}>
        <div className={styles.wrap}>
          <h1 className={styles.heading}>
            {this.state.letters.map((letter, index) => (
              <TitleLetter key={index} index={index} letter={letter} />
            ))}
          </h1>
        </div>
      </div>
    );
  }
}

TitleBar.propTypes = {
  heading: PropTypes.string.isRequired
};

TitleBar.defaultProps = {};

export default TitleBar;
