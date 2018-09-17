import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import configureStore from '@store/configure-store';
import sagas from '@sagas';
import App from '@containers/app';

const preloadedState = window.SERVER_STATE;
const store = configureStore(preloadedState);
store.runSaga(sagas);

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
