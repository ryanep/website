import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './style.scss';

export default class Navigation extends Component {

    burgerButtonClicked() {
        console.log('Burger clicked');
    }

    render() {
        return (
            <nav className={styles.nav}>
                <div className={styles.wrap}>
                    <IndexLink to={'/'} className={styles.logolink}>
                        <img src="/images/logo.svg" width="80" height="30" alt="Logo" className={styles.logo} />
                    </IndexLink>
                    <div className={styles.links}>
                    	<IndexLink to={'/'} className={styles.link} activeClassName={styles.active}>Home</IndexLink>
                    	<Link to={'/about'} className={styles.link} activeClassName={styles.active}>About</Link>
                    	<Link to={'/work'} className={styles.link} activeClassName={styles.active}>Work</Link>
                        <Link to={'/blog'} className={styles.link} activeClassName={styles.active}>Blog</Link>
                    	<Link to={'/contact'} className={styles.link} activeClassName={styles.active}>Contact</Link>
                    </div>
                    <div className={styles.burger} onClick={this.burgerButtonClicked}>
                        <div className={styles.hide}>Menu</div>
                    </div>
                </div>
            </nav>
        )
    }
    
}