import React, { Component } from 'react';
import FooterLink from './footer-link';
import styles from './style.scss';

export default class Footer extends Component {

    render() {

    	let footerLinks = [
    		{
    			class : 'github',
    			url :'//github.com/ryanep',
    			title: 'GitHub',
                icon: '/images/github.svg'
    		},
    		{
    			class : 'twitter',
    			url :'//twitter.com/ryanep2',
    			title: 'Twitter',
                icon: '/images/github.svg'
    		},
    		{
    			class : 'linkedin',
    			url :'//www.linkedin.com/in/ryanep/',
    			title: 'LinkedIn',
                icon: '/images/github.svg'
    		},
    		{
    			class : 'dribbble',
    			url: 'https://dribbble.com/ryanep/',
    			title: 'Dribbble',
                icon: '/images/github.svg'
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