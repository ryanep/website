import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import ScrollToTop from '@components/scroll-to-top';
import configureStore from '../app/store/configure-store';
import sagas from '../app/sagas';
import App from '@containers/app';

const preloadedState = window.SERVER_STATE;
const store = configureStore(preloadedState);
store.runSaga(sagas);

render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <Route path={'/'} component={App} />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById('app')
);
