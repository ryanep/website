import React, { Component } from 'react';
import { Link } from 'react-router';
import TimelineItem from './timeline-item';
import styles from './style.scss';

export default class HomeTimeline extends Component {

    render() {

    	let timeline = [
    		{
    			company: 'MMT Digital',
    			role: 'Frontend / PHP developer',
    			time: '2014 - present',
                url: '/work#mmt'
    		},
    		{
    			company: 'in.house.media',
    			role: 'Frontend / PHP developer',
    			time: '2012 - 2014',
                url: '/work#ihm'
    		},
    		{
    			company: 'Raffenday',
    			role: 'Frontend / PHP developer',
    			time: '2011 - 2014',
                url: '/work#raffenday'
    		}
    	];

        return (
            <section className={styles.timeline}>
            	<div className={styles.wrap}>
            		<h2 className={styles.heading}>Work Experience</h2>
            		<p className={styles.desc}>Below is a timeline of my career history.</p>
            		<div className={styles.items}>
            			{timeline.map((item, index) => <TimelineItem key={index} data={item} />)}
            		</div>
            	</div>
            </section>
        )
    }
    
}