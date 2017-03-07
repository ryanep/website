import React, { Component } from 'react';
import styles from './style.scss';

export default class FooterLink extends Component {

    render() {
        return (
            <a href={this.props.link.url} target="_blank" className={styles.link}>
                {this.props.link.title}
            </a>
        )
    }
    
}