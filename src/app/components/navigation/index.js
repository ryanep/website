import React, { Component } from 'react';
import { IndexLink } from 'react-router';
import styles from './style.scss';

export default class Navigation extends Component {

	constructor(props) {
		super(props);
		this.state = {
			open: false
		};
	}

	burgerButtonClicked = () => {
		this.setState({ open: !this.state.open });
	}

	navItemClicked = () => {
		this.setState({ open: false });
	}

	render() {
		const links = [
			{ to: '#', title: 'Home' },
			{ to: '#about', title: 'About' },
			{ to: '#work', title: 'Work' },
			// { to: '/blog', title: 'Blog' },
			{ to: '#contact', title: 'Contact' }
		];

		const burgerClass = this.state.open ? styles.burgerOpen : styles.burger;

		return (
			<nav className={styles.nav}>
				<div className={styles.wrap}>
					<IndexLink to={'/'} className={styles.logolink}>
						<img src="/images/logo.svg" width="80" height="30" alt="Logo" className={styles.logo} />
					</IndexLink>
					<div className={this.state.open ? styles.linksOpen : styles.links}>
						{/*{links.map((link, index) => <Link key={index} to={link.to} className={styles.link}
							activeClassName={styles.active}
							onClick={this.navItemClicked}>{link.title}</Link>)}*/}
						{links.map(link => <a href={link.to} className={styles.link}>{link.title}</a>)}
					</div>
					<div className={burgerClass} onClick={this.burgerButtonClicked}>
						<div className={styles.hide}>Menu</div>
					</div>
				</div>
			</nav>
		);
	}

}