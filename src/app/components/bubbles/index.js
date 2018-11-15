import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bubble from '../bubble';
import * as styled from './styled';

class Bubbles extends Component {
  constructor(props) {
    super(props);
    const { bubbles: bubbleCount } = this.props;
    const bubbles = [...Array(bubbleCount)].map((item, index) => ({
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
      size: `scale(1.${this.getRandomNumber(scale)})`
    };
  }

  render() {
    const { bubbles } = this.state;
    return (
      <styled.Bubbles>
        {bubbles.map(({ id, ...position }) => (
          <Bubble key={id} {...position} />
        ))}
      </styled.Bubbles>
    );
  }
}

Bubbles.propTypes = {
  bubbles: PropTypes.number.isRequired
};

Bubbles.defaultProps = {};

export default Bubbles;
