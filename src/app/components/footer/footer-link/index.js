import React, { Component } from 'react';
import SVGInline from 'react-svg-inline';
import styles from './style.scss';

export default class FooterLink extends Component {

	render() {
		return (
			<a href={this.props.link.url} target={'_blank'} className={styles.link}>
				<SVGInline svg={this.props.link.icon} className={styles.icon} />
				<div className={styles.hide}>{this.props.link.title}</div>
			</a>
		);
	}

}