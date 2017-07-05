import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import reset from './reset.scss';
import fonts from './fonts.scss';
import styles from './style.scss';
import Header from '@components/header';
import Footer from '@components/footer';
import Loader from '@components/loader';
import Home from '@containers/home';
import About from '@containers/about';
import Work from '@containers/work';
import Contact from '@containers/contact';
import Error from '@containers/error';

export default class App extends Component {
	render() {
		return (
			<div className={styles.app}>
				<Header path={this.props.location.pathname} />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route exact path={'/about'} component={About} />
					<Route exact path={'/work'} component={Work} />
					<Route exact path={'/contact'} component={Contact} />
					<Route component={Error} />
				</Switch>
				<Footer />
				{/*<Loader isLoading={this.props.isLoading} />*/}
			</div>
		);
	}
}
