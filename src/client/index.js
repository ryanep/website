import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { Provider } from 'react-redux';
import { useScroll } from 'react-router-scroll';
import configureStore from '../app/store/configure-store';
import routes from '../app/routes';
import sagas from '../app/sagas';

const preloadedState = window.SERVER_STATE;
const store = configureStore(browserHistory, preloadedState);
store.runSaga(sagas);

render(
	<Provider store={store}>
		<Router history={browserHistory} render={applyRouterMiddleware(useScroll())} routes={routes} />
	</Provider>,
	document.getElementById('app')
);