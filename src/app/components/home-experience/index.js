import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './style.scss';

export default class HomeExperience extends Component {

    render() {
        return (
            <section className={styles.experience}>
            	<div className={styles.wrap}>
            		<h2 className={styles.heading}>Experience</h2>
            	</div>
            </section>
        )
    }
    
}