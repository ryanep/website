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
            	<div className={styles.heading}>
	            	<h1>Ryan Elliott-Potter</h1>
	            	<p>Web Developer</p>
            	</div>
            </header>
        )
    }
    
}