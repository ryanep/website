import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPageRequest } from '../../actions/page';
import Helmet from 'react-helmet';
import TitleBar from '../../components/title-bar';
import styles from './style.scss';

export class About extends Component {

	componentWillMount() {
		this.props.getPageData(this.props.route.path);
	}

	render() {
		return (
			<main className={styles.main}>
				<Helmet title={'About - Ryan Elliott-Potter'} />
				<TitleBar heading={'About'} />
				About
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

export default connect(mapStateToProps, mapDispatchToProps)(About);