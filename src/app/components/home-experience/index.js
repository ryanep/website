import React, { Component } from 'react';
import { Link } from 'react-router';
import ExperienceIcon from './experience-icon';
import styles from './style.scss';

export default class HomeExperience extends Component {

    render() {

    	let icons = [
    		{
    			name: 'HTML',
    			colour: 'blue'
    		},
    		{
    			name: 'CSS',
    			colour: 'red'
    		},
    		{
    			name: 'JavaScript',
    			colour: 'red'
    		},
    		{
    			name: 'Node.js',
    			colour: 'red'
    		},
    		{
    			name: 'PHP',
    			colour: 'red'
    		},
    		{
    			name: 'WordPress',
    			colour: 'red'
    		},
    		{
    			name: 'MySQL',
    			colour: 'red'
    		},
    		{
    			name: 'MongoDB',
    			colour: 'red'
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