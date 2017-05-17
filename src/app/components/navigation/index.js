import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import styles from './style.scss';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    burgerButtonClicked = () => {
        this.setState({ open: !this.state.open });
    }

    navItemClicked = () => {
        this.setState({ open: false });
    }

    render() {
        return (
            <nav className={styles.nav}>
                <div className={styles.wrap}>
                    <IndexLink to={'/'} className={styles.logolink}>
                        <img src="/images/logo.svg" width="80" height="30" alt="Logo" className={styles.logo} />
                    </IndexLink>
                    <div className={this.state.open ? styles.linksOpen : styles.links}>
                    	<IndexLink to={'/'} className={styles.link} activeClassName={styles.active} onClick={this.navItemClicked}>Home</IndexLink>
                    	<Link to={'/about'} className={styles.link} activeClassName={styles.active} onClick={this.navItemClicked}>About</Link>
                    	<Link to={'/work'} className={styles.link} activeClassName={styles.active} onClick={this.navItemClicked}>Work</Link>
                        <Link to={'/blog'} className={styles.link} activeClassName={styles.active} onClick={this.navItemClicked}>Blog</Link>
                    	<Link to={'/contact'} className={styles.link} activeClassName={styles.active} onClick={this.navItemClicked}>Contact</Link>
                    </div>
                    <div className={this.state.open ? styles.burgerOpen : styles.burger} onClick={this.burgerButtonClicked}>
                        <div className={styles.hide}>Menu</div>
                    </div>
                </div>
            </nav>
        )
    }
    
}