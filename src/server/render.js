import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext } from 'react-router';
import Helmet from 'react-helmet';
import configureStore from '../app/store/configure-store';
import sagas from '../app/sagas';

export function handleRender(res, props) {

	let head = Helmet.rewind();

	const store = configureStore();

	const rootComponent = (
        <Provider store={store}>
            <RouterContext {...props} />
        </Provider>
    );

    store.runSaga(sagas).done.then(() => {
        const initialState = JSON.stringify(store.getState());
        const markup = renderToString(rootComponent);
        res.render('index', { head, markup, initialState });
    });
    
    renderToString(rootComponent);
    store.close();
}

export function handleNotFound(res, req) {
	res.send('Error 404');
}