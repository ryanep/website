import React, { Component } from 'react';
import TitleLetter from './title-letter';
import styles from './style.scss';

export default class TitleBar extends Component {

	render() {

		const letters = this.props.heading.split('');

		return (
			<div className={styles.bar}>
				<div className={styles.wrap}>
					<h1 className={styles.heading}>
						{letters.map((letter, index) => <TitleLetter key={index} index={index} letter={letter} />)}
					</h1>
				</div>
			</div>
		);
	}

}