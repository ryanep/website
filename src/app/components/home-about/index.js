import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class HomeAbout extends Component {

    render() {
        return (
            <section className={styles.about}>
            	<div className={styles.wrap}>
            		<img src={this.props.image} width="120" height="120" className={styles.photo} alt="Ryan Elliott-Potter" />
            		<h1 className={styles.heading}>{this.props.title}</h1>
            		<p className={styles.info}>{this.props.desc}</p>
            		<Link to={'/about'}>{this.props.cta}</Link>
            	</div>
            </section>
        )
    }
    
}