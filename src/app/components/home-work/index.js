import React, { Component } from 'react';
import styles from './style.scss';

export default class HomeWork extends Component {

    render() {
        return (
            <section className={styles.work}>
                <div className={styles.wrap}>
                    <h2 className={styles.heading}>My work</h2>
                </div>
            </section>
        )
    }
    
}