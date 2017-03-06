import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import Navigation from '../navigation';
import styles from './style.scss';

export default class Header extends Component {

    render() {
    	let className = this.props.path === '/' ? styles.banner : styles.header;
    	
        return (
            <header className={className}>
            	<Navigation />

                {this.props.path === '/' &&
            	<div className={styles.heading}>
	            	<h1 className={styles.title}>Ryan Elliott-Potter</h1>
	            	<p className={styles.desc}>Web Developer</p>
            	</div>
                }
            </header>
        )
    }
    
}