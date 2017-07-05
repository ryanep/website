import React, { Component } from 'react';
import Navigation from '@components/navigation';
import Bubbles from '@components/bubbles';
import styles from './style.scss';

export default class Header extends Component {
	render() {
		const className = this.props.path === '/' ? styles.banner : styles.header;

		return (
			<header className={className}>
				<Navigation />
				<Bubbles path={this.props.path} />

				{this.props.path === '/' &&
					<div className={styles.heading}>
						<h1 className={styles.title}>Ryan Elliott-Potter</h1>
						<p className={styles.desc}>Web Developer</p>
					</div>}
			</header>
		);
	}
}
