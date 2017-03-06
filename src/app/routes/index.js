import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/app';
import Home from '../containers/home';
import About from '../containers/about';
import Blog from '../containers/blog';
import Work from '../containers/work';
import Contact from '../containers/contact';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Home} />
		<Route path="about" component={About} />
		<Route path="blog" component={Blog} />
		<Route path="work" component={Work} />
		<Route path="contact" component={Contact} />
	</Route>
);