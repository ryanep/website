import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import configureStore from '../app/store/configure-store';

export function handleRender(res, props) {

	let page = {
		title: 'Home'
	}

	const store = configureStore({
		page
	});

	const app = renderToString(
	    <Provider store={store}>
	    	<RouterContext {...props} />
		</Provider>
	);

	let head = Helmet.rewind();

	const initialState = JSON.stringify(store.getState());
	res.render('index', { head, app, initialState });
}

export function handleNotFound(res, req) {
	res.send('Error 404');
}