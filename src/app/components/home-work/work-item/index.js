import React, { Component } from 'react';
import { Link } from 'react-router';
import LazyLoad from 'react-lazyload';
import styles from './style.scss';

export default class HomeWork extends Component {

    render() {
        return (
            <div className={styles.work}>
            	<LazyLoad height={200}>
                	<img src={this.props.image} alt={this.props.alt} className={styles.image} />
                </LazyLoad>
                <p className={styles.desc}>{this.props.desc}</p>
            </div>
        )
    }
    
}