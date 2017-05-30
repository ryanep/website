import React, { Component } from 'react';
import ExperienceIcon from './experience-icon';
import styles from './style.scss';

export default class HomeExperience extends Component {

	render() {
		return (
			<section className={styles.experience}>
				<div className={styles.wrap}>
					<h2 className={styles.heading}>{this.props.content.title}</h2>
					<p className={styles.desc}>{this.props.content.desc}</p>
					<ul className={styles.icons}>
						{this.props.content.icons.map((icon, index) => <ExperienceIcon key={index} data={icon} />)}
					</ul>
				</div>
			</section>
		);
	}

}