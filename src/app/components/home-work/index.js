import React, { Component } from 'react';
import { Link } from 'react-router';
import WorkItem from './work-item';
import styles from './style.scss';

export default class HomeWork extends Component {

    render() {

        let work = [
            {
                image: 'https://ryanep.com/images/cake.jpg',
                desc: 'This is an example description'
            },
            {
                image: 'https://ryanep.com/images/hainault.jpg',
                desc: 'This is an example description'
            },
            {
                image: 'https://ryanep.com/images/beerhunter.jpg',
                desc: 'This is an example description'
            }
        ];

        return (
            <section className={styles.work}>
                <div className={styles.wrap}>
                    <h2 className={styles.heading}>My work</h2>
                    <p className={styles.desc}>Here are some of my personal projects</p>
                    <div className={styles.items}>
                        {work.map((item, index) => <WorkItem key={index} image={item.image} desc={item.desc} />)}
                    </div>
                    <Link to={'/work'} className={styles.button}>See more work</Link>
                </div>
            </section>
        )
    }
    
}