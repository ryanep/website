import React, { Component } from 'react';
import FooterLink from './footer-link';
import styles from './style.scss';

export default class Footer extends Component {

    render() {

    	let footerLinks = [
    		{
    			class : 'github',
    			url :'//github.com/ryanep',
    			title: 'GitHub'
    		},
    		{
    			class : 'twitter',
    			url :'//twitter.com/ryanep2',
    			title: 'Twitter'
    		},
    		{
    			class : 'linkedin',
    			url :'//www.linkedin.com/in/ryanep/',
    			title: 'LinkedIn'
    		},
    		{
    			class : 'dribbble',
    			url: 'https://dribbble.com/ryanep/',
    			title: 'Dribbble'
    		}
    	];


        return (
            <footer className={styles.footer}>
            	<div className={styles.wrap}>
            		<div className={styles.copyright}>© Ryan Elliott-Potter {new Date().getFullYear()}. All rights reserved.</div>
	            	<div className={styles.icons}>
	            		{footerLinks.map((link, index) => <FooterLink key={index} link={link} />)}
	            	</div>
            	</div>
            </footer>
        )
    }
    
}