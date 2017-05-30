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
		this.props.getPageData(
			!this.props.route.path ? 'home' : this.props.route.path
		);
	}

	render() {
		return (
			<main className={styles.main}>
				{this.props.data.home &&
					<div>
						<Helmet title={'Home - Ryan Elliott-Potter'} />
						<HomeAbout content={this.props.data.home.components.about} />
						<HomeExperience content={this.props.data.home.components.experience} />
						<HomeWork content={this.props.data.home.components.work} />
						<HomeTimeline content={this.props.data.home.components.timeline} />
						<ContactForm content={this.props.data.home.components.contactForm} />
					</div>}
			</main>
		);
	}

}

const mapStateToProps = state => {
	return {
		data: state.page.page
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPageData: slug => { dispatch(fetchPageRequest(slug)); }
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);