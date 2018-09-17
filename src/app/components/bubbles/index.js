import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from '../bubble';
import styles from './style.scss';

export default class Bubbles extends Component {
  constructor(props) {
    super(props);
    const bubbles = [...Array(this.props.bubbles)].map((item, index) => ({
      id: index,
      ...this.generatePosition()
    }));

    this.state = {
      bubbles
    };
  }

  shouldComponentUpdate() {
    return false;
  }

  getRandomNumber(length, start = 1) {
    return Math.floor(Math.random() * (length - start) + start);
  }

  generatePosition() {
    const bubbleWidth = 80;
    const maxWidth = 1920;
    const maxHeight = 350;
    const scale = 6;

    return {
      left: this.getRandomNumber(maxWidth),
      top: this.getRandomNumber(maxHeight, bubbleWidth),
      transform: `scale(1.${this.getRandomNumber(scale)})`
    };
  }

  render() {
    return (
      <div className={styles.bubbles}>
        {this.state.bubbles.map(({ id, ...position }) => (
          <Bubble key={id} {...position} />
        ))}
      </div>
    );
  }
}

Bubbles.propTypes = {
  bubbles: PropTypes.number.isRequired
};
