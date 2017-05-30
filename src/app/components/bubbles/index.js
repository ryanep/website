import React, { Component } from 'react';
import styles from './style.scss';
import Bubble from './bubble';

export default class Bubbles extends Component {

	shouldComponentUpdate() {
		return false;
	}

	render() {
        const totalBubbles = 20;

		return (
			<div className={styles.bubbles}>
				{[...Array(totalBubbles)].map((x, i) => <Bubble key={i} />)}
			</div>
		);
	}

}
