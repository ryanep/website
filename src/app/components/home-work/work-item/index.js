import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import styles from './style.scss';

export default class HomeWork extends Component {
  render() {
    return (
      <div className={styles.work}>
        <LazyLoad height={200}>
          <a href={this.props.url} className={styles.link} target={'_blank'}>
            {this.props.inProgress &&
              <div className={styles.progress}>In progress</div>}
            <img
              src={this.props.image}
              alt={this.props.alt}
              className={styles.image}
            />
          </a>
        </LazyLoad>
        <p className={styles.desc}>
          {this.props.desc}
        </p>
      </div>
    );
  }
}
