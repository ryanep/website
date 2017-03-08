import React, { Component } from 'react';
import { Link } from 'react-router';
import ExperienceIcon from './experience-icon';
import styles from './style.scss';

export default class HomeExperience extends Component {

    render() {

    	let icons = [
    		{
    			name: 'HTML',
    			colour: '#e34e30'
    		},
    		{
    			name: 'CSS',
    			colour: '#1e73b3'
    		},
    		{
    			name: 'JavaScript',
    			colour: '#ffda3d'
    		},
    		{
    			name: 'Node.js',
    			colour: '#85cc39'
    		},
    		{
    			name: 'PHP',
    			colour: '#6283ba'
    		},
    		{
    			name: 'WordPress',
    			colour: '#27769a'
    		},
    		{
    			name: 'MySQL',
    			colour: '#0c6289'
    		},
    		{
    			name: 'MongoDB',
    			colour: '#8ac365'
    		},
    	];

        return (
            <section className={styles.experience}>
            	<div className={styles.wrap}>
            		<h2 className={styles.heading}>Technology</h2>
            		<p className={styles.desc}>I have experience is a number of different technologies, some of which are listed below:</p>
            		<ul className={styles.icons}>
            			{icons.map((icon, index) => <ExperienceIcon key={index} data={icon} />)}
            		</ul>
            	</div>
            </section>
        )
    }
    
}