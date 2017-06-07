import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import styles from './style.scss';

export default class HomeAbout extends Component {

	render() {
		return (
			<section id={'about'} className={styles.about}>
				<div className={styles.wrap}>
					<img src={this.props.content.image} width="120" height="120"
						className={styles.photo} alt={this.props.content.imageAlt} />
					<h2 className={styles.heading}>{this.props.content.title}</h2>
					<ReactMarkdown className={styles.info} source={this.props.content.desc} />
					{/*<Link to={this.props.content.buttonURL} className={styles.button}>
						{this.props.content.buttonText}
					</Link>*/}
				</div>
			</section>
		);
	}

}