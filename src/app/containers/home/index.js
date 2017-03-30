import React, { Component } from 'react';
import Helmet from 'react-helmet';
import HomeAbout from '../../components/home-about';
import HomeExperience from '../../components/home-experience';
import HomeWork from '../../components/home-work';
import HomeTimeline from '../../components/home-timeline';
import ContactForm from '../../components/contact-form';
import styles from './style.scss';

export default class Home extends Component {

    render() {
        return (
        	<main className={styles.main}>
        		<Helmet title={'Home - Ryan Elliott-Potter'} />
        		<HomeAbout image={'https://avatars2.githubusercontent.com/u/11217494?v=3&s=460'} title={'About Me'} desc={'My name is Ryan Elliott-Potter and I am a software engineer and web developer. I have a passion for all types of technology and enjoy developing software and web applications.'} cta={'Learn more'}  />
        		<HomeExperience />
                <HomeWork />
        		<HomeTimeline />
                <ContactForm />
        	</main>
        )
    }
    
}