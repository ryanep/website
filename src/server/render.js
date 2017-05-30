import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { RouterContext, createMemoryHistory } from 'react-router';
import Helmet from 'react-helmet';
import { STATUS_500 } from '../app/constants/status-types';
import configureStore from '../app/store/configure-store';
import sagas from '../app/sagas';

export const handleRender = (res, props) => {

	const head = Helmet.rewind();
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
    .catch(err => {
        res.status(STATUS_500).send(err.message);
    });

    renderToString(rootComponent);
    store.close();
};