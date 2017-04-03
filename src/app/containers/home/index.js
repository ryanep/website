import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import HomeAbout from '../../components/home-about';
import HomeExperience from '../../components/home-experience';
import HomeWork from '../../components/home-work';
import HomeTimeline from '../../components/home-timeline';
import ContactForm from '../../components/contact-form';
import styles from './style.scss';

import { fetchPageData } from '../../actions/page';

export class Home extends Component {

    componentWillMount() {
        this.props.fetchData('home');
    }

    render() {
        console.log("rendering home");
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

const mapStateToProps = (state) => {
    return {
        data: state.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (slug) => { dispatch(fetchPageData(slug)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);