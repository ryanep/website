import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class TimelineItem extends Component {

    render() {
        return (
            <article className={styles.item}>
                <header className={styles.header}>
                    <div className={styles.company}>{this.props.data.company}</div>
                    <div className={styles.time}>{this.props.data.time}</div>
                </header>
                <div className={styles.role}>{this.props.data.role}</div>
            </article>
        )
    }
    
}