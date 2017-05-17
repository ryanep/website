import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class TimelineItem extends Component {

    render() {
        return (
            <Link to={this.props.data.url} className={styles.link}>
                <article className={styles.item}>
                    <header className={styles.header}>
                        <img src={this.props.data.icon} width="30" height="30" alt={this.props.data.company} className={styles.icon} />
                        <div className={styles.company}>{this.props.data.company}</div>
                        <div className={styles.time}>{this.props.data.time}</div>
                    </header>
                    <div className={styles.role}>{this.props.data.role}</div>
                </article>
            </Link>
        )
    }
    
}