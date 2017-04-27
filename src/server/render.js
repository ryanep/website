import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, createMemoryHistory } from 'react-router';
import Helmet from 'react-helmet';
import configureStore from '../app/store/configure-store';
import sagas from '../app/sagas';

export function handleRender(res, props) {

	let head = Helmet.rewind();

    const memoryHistory = createMemoryHistory();
	const store = configureStore(memoryHistory);

	const rootComponent = (
        <Provider store={store}>
            <RouterContext {...props} />
        </Provider>
    );
    
    store.runSaga(sagas).done.then(() => {
        const initialState = JSON.stringify(store.getState());
        const markup = renderToString(rootComponent);
        res.render('index', { head, markup, initialState });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).send(err.message)
    })

    renderToString(rootComponent);
    store.close();
}

export function handleNotFound(res, req) {
	res.send('Error 404');
}