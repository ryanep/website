import React, { Component } from 'react';
import styles from './style.scss';

export default class TitleBar extends Component {

    render() {
        return (
            <div className={styles.bar}>
                <div className={styles.wrap}>
                    <h1 className={styles.heading}>{this.props.heading}</h1>
                </div>
            </div>
        )
    }
    
}