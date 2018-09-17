import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Wrap from '@components/wrap';
import TitleBarLetter from '@components/title-bar-letter';
import * as styled from './styled';

class TitleBar extends Component {
  constructor(props) {
    super(props);
    const letters = this.props.heading
      .split('')
      .map((letter, index) => ({ id: index, letter }));

    this.state = {
      letters
    };
  }

  render() {
    const { letters } = this.state;
    return (
      <styled.TitleBar>
        <Wrap>
          <styled.Heading>
            {letters.map(({ id, letter }, index) => (
              <TitleBarLetter key={id} index={index} letter={letter} />
            ))}
          </styled.Heading>
        </Wrap>
      </styled.TitleBar>
    );
  }
}

TitleBar.propTypes = {
  heading: PropTypes.string.isRequired
};

TitleBar.defaultProps = {};

export default TitleBar;
