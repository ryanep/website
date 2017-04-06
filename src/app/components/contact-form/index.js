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
						<div className={styles.sections}>
							<div className={styles.left}>
								<label className={styles.label} htmlFor={'name'}>Name</label>
								<input className={styles.textbox} type="text" id="name" name="name" required />
								<label className={styles.label} htmlFor={'subject'}>Subject</label>
								<input className={styles.textbox} type="text" id="subject" name="subject" required />
								<label className={styles.label} htmlFor={'email'}>Email</label>
								<input className={styles.email} type="email" id="email" name="email" required />
							</div>
							<div className={styles.right}>
								<label className={styles.label} htmlFor={'message'}>Message</label>
								<textarea className={styles.textarea} id="message" name="message" required></textarea>
							</div>
						</div>
						<div className={styles.buttons}>
							<input type="submit" value="Send message" className={styles.button} />
						</div>
					</form>
				</div>
			</div>
		)
	}
	
}