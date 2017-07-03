import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPageRequest } from '../../actions/page';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import styles from './style.scss';

export class Work extends Component {
	componentWillMount() {
		this.props.getPageData(this.props.location.pathname);
	}

	render() {
		return (
			<main className={styles.main}>
				<Helmet title={'Work - Ryan Elliott-Potter'} />
				<TitleBar heading={'Work'} />
				Work
			</main>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.page
	};
};

const mapDispatchToProps = dispatch => {
	return {
		getPageData: slug => {
			dispatch(fetchPageRequest(slug));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Work);
