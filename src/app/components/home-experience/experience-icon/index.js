import React, { Component } from 'react';
import styles from './style.scss';

export default class ExperienceIcon extends Component {
  render() {
    const style = {
      backgroundColor: this.props.data.colour
    };

    return (
      <li className={styles.item}>
        <div className={styles.icon} style={style} title={this.props.data.name}>
          <img
            src={this.props.data.image}
            width="50"
            height="50"
            className={styles.image}
            alt={this.props.data.name}
          />
        </div>
      </li>
    );
  }
}
