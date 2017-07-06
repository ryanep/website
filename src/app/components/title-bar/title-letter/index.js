import React, { Component } from 'react';
import styles from './style.scss';

export default class TitleLetter extends Component {
  render() {
    const delay = 40;

    const style = {
      animationDelay: `${this.props.index / delay}s`
    };

    return (
      <span className={styles.letter} style={style}>
        {this.props.letter}
      </span>
    );
  }
}
