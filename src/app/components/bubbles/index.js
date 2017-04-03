import React, { Component } from 'react';
import styles from './style.scss';
import Bubble from './bubble';

export default class Bubbles extends Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className={styles.bubbles}>
                {[...Array(20)].map((x, i) =>
                    <Bubble key={i} />
                )}
            </div>
        )
    }
    
}