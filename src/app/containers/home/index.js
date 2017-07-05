import React, { Component } from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HomeAbout from '@components/home-about';
import HomeExperience from '@components/home-experience';
import HomeWork from '@components/home-work';
import HomeTimeline from '@components/home-timeline';
import ContactForm from '@components/contact-form';
import { fetchPageRequest } from '@actions/page';
import styles from './style.scss';

export class Home extends Component {
	componentWillMount() {
		this.props.getPageData('home');
	}

	render() {
		if (!this.props.page || !this.props.page.home) return null;
		return (
			<main className={styles.main}>
				<Helmet title={'Home - Ryan Elliott-Potter'} />
				<HomeAbout {...this.props.page.home.components.about} />
				<HomeExperience content={this.props.page.home.components.experience} />
				<HomeWork content={this.props.page.home.components.work} />
				<HomeTimeline content={this.props.page.home.components.timeline} />
				<ContactForm content={this.props.page.home.components.contactForm} />
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		page: state.page.page
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPageData: slug => {
			dispatch(fetchPageRequest(slug));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
