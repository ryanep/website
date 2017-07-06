import React, { Component } from 'react';
import styles from './style.scss';

export default class Bubble extends Component {
  getRandomNumber(length, start = 1) {
    return Math.floor(Math.random() * (length - start) + start);
  }

  render() {
    const bubbleWidth = 80;
    const maxWidth = 1920;
    const maxHeight = 350;
    const scale = 6;

    const style = {
      left: this.getRandomNumber(maxWidth),
      top: this.getRandomNumber(maxHeight, bubbleWidth),
      transform: `scale(1.${this.getRandomNumber(scale)})`
    };

    return <div style={style} className={styles.bubble} />;
  }
}
