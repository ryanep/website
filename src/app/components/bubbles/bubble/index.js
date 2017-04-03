import React, { Component } from 'react';
import styles from './style.scss';

export default class Bubble extends Component {

	getRandomNumber(length, start = 1) {
		return Math.floor((Math.random() * (length - start)) + start);
	}

    render() {

    	let style = {
    		left: this.getRandomNumber(1920),
    		top: this.getRandomNumber(350, 80),
            transform: `scale(1.${this.getRandomNumber(6)})`
    	}

        return (
        	<div style={style} className={styles.bubble}></div>
        )
    }
    
}