import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class HomeAbout extends Component {

    render() {
        return (
            <section className={styles.about}>
            	<div className={styles.wrap}>
            		<img src={this.props.content.image} width="120" height="120" className={styles.photo} alt={this.props.content.imageAlt} />
            		<h2 className={styles.heading}>{this.props.content.title}</h2>
            		<p className={styles.info}>{this.props.content.desc}</p>
            		<Link to={this.props.content.buttonURL} className={styles.button}>{this.props.content.buttonText}</Link>
            	</div>
            </section>
        )
    }
    
}