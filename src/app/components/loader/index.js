import React, { Component } from 'react';
import styles from './style.scss';

export default class Loader extends Component {

	render() {
		const className = this.props.isLoading ? styles.loader : styles.hidden;

		return (
			<div className={className}>
				<div className={styles.hide}>Loading...</div>
			</div>
		);
	}

}
