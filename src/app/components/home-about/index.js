import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.scss';

export default ({ image, imageAlt, title, desc, buttonURL, buttonText }) => (
	<div className={styles.about}>
		<div className={styles.wrap}>
			<img src={image} width="120" height="120"
				className={styles.photo} alt={imageAlt} />
			<h2 className={styles.heading}>{title}</h2>
			<p className={styles.info}>{desc}</p>
			<Link to={buttonURL} className={styles.button}>{buttonText}</Link>
		</div>
	</div>
);