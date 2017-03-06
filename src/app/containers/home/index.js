import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HomeAbout from '../../components/home-about';
import styles from './style.scss';

export default class Home extends Component {

    render() {
        return (
        	<main className={styles.main}>
        		<Helmet title={'Home - Ryan Elliott-Potter'} />
        		<HomeAbout image={'https://ryanep.com/images/me@2x.jpg'} title={'About Me'} desc={'My name is Ryan Elliott-Potter and I am a software engineer and web developer. I have a passion for all types of technology and enjoy developing software and web applications.'} cta={'Learn more'}  />
        	</main>
        )
    }
    
}