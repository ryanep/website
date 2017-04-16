import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class HomeWork extends Component {

    render() {
        return (
            <div className={styles.work}>
                <img src={this.props.image} alt={this.props.alt} className={styles.image} />
                <p className={styles.desc}>{this.props.desc}</p>
            </div>
        )
    }
    
}