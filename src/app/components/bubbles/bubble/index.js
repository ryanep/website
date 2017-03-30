import React, { Component } from 'react';
import styles from './style.scss';

export default class Bubble extends Component {

	getRandomNumber(length) {
		return Math.floor((Math.random() * length) + 1);
	}

    render() {

    	let style = {
    		left: this.getRandomNumber(1920),
    		top: this.getRandomNumber(450),
            transform: `scale(1.${this.getRandomNumber(6)})`
    	}

        return (
        	<div style={style} className={styles.bubble}></div>
        )
    }
    
}