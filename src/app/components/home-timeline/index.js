import React, { Component } from 'react';
import TimelineItem from './timeline-item';
import styles from './style.scss';

export default class HomeTimeline extends Component {
	render() {
		return (
			<section className={styles.timeline}>
				<div className={styles.wrap}>
					<h2 className={styles.heading}>
						{this.props.content.title}
					</h2>
					<p className={styles.desc}>{this.props.content.desc}</p>
					<div className={styles.items}>
						{this.props.content.timeline.map((item, index) => (
							<TimelineItem key={index} data={item} />
						))}
					</div>
				</div>
			</section>
		);
	}
}
