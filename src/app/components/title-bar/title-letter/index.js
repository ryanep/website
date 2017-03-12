import React, { Component } from 'react';
import styles from './style.scss';

export default class TitleLetter extends Component {

    render() {

        let style = {
            animationDelay: `${this.props.index / 40}s`
        }

        return (
            <span className={styles.letter} style={style}>{this.props.letter}</span>
        )
    }
    
}