import React, { Component } from 'react';
import styles from './style.scss';
import Bubble from './bubble';

export default class Bubbles extends Component {

    render() {
        return (
            <div className={styles.bubbles}>
                {[...Array(15)].map((x, i) =>
                    <Bubble key={i} />
                )}
            </div>
        )
    }
    
}