import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import TitleBar from '@components/title-bar';
import ContactForm from '@components/contact-form';
import ContactConnect from '@components/contact-connect';
import { fetchPageRequest } from '@actions/page';
import styles from './style.scss';

export class Contact extends Component {
	componentWillMount() {
		this.props.getPageData(this.props.location.pathname);
	}

	render() {
		return (
			<main className={styles.main}>
				<Helmet title={'Contact - Ryan Elliott-Potter'} />
				<TitleBar heading={'Contact'} />
				{this.props.data.contact &&
					<div>
						<ContactConnect />
						<ContactForm
							content={this.props.data.contact.components.contactForm}
						/>
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
		getPageData: slug => {
			dispatch(fetchPageRequest(slug));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
