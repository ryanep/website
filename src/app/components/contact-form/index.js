import React, { Component } from 'react';
import styles from './style.scss';

export default class ContactForm extends Component {

	handleSubmit = (event) => {
		event.preventDefault();
		console.log("Submitted");
	}

	render() {
		return (
		    <div className={styles.contact}>
			    <div className={styles.wrap}>
			    	<h2 className={styles.heading}>Contact me</h2>
			    	<p className={styles.desc}>Feel free to contact me</p>

					<form className={styles.form} onSubmit={this.handleSubmit}>
						<div className={styles.section}>
							<label className={styles.label} htmlFor={'name'}>Name</label>
							<input className={styles.textbox} type="text" id="name" name="name" required />
							<label className={styles.label} htmlFor={'subject'}>Subject</label>
							<input className={styles.textbox} type="text" id="subject" name="subject" required />
							<label className={styles.label} htmlFor={'email'}>Email</label>
							<input className={styles.email} type="text" id="email" name="email" required />
						</div>
						<div className={styles.section}>
							<label className={styles.label} htmlFor={'message'}>Message</label>
							<textarea className={styles.textarea} id="message" name="message" required></textarea>
						</div>
						<input type="submit" value="Send message" className={styles.button} />
					</form>
				</div>
			</div>
		)
	}
	
}