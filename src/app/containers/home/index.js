import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import HomeAbout from '../../components/home-about';
import HomeExperience from '../../components/home-experience';
import HomeWork from '../../components/home-work';
import HomeTimeline from '../../components/home-timeline';
import ContactForm from '../../components/contact-form';
import styles from './style.scss';

import { fetchPageRequest } from '../../actions/page';

export class Home extends Component {

    componentWillMount() {
        this.props.getPageData('home');
    }

    render() {
        if (Object.keys(this.props.data).length == 0) return null; // @TODO: Fix
        return (
        	<main className={styles.main}>
        		<Helmet title={'Home - Ryan Elliott-Potter'} />
        		<HomeAbout content={this.props.data.components.about}  />
        		<HomeExperience content={this.props.data.components.experience} />
                <HomeWork content={this.props.data.components.work} />
        		<HomeTimeline content={this.props.data.components.timeline} />
                <ContactForm content={this.props.data.components.contactForm} />
        	</main>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        data: state.page.page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPageData: (slug) => { dispatch(fetchPageRequest(slug)) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);