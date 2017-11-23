import express from 'express';
import React from 'react';
import Helmet from 'react-helmet';
import * as middleware from './middleware';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { Route } from 'react-router-dom';
import { STATUS_500 } from '@constants/status-types';
import configureStore from '@store/configure-store';
import sagas from '@sagas';
import App from '@containers/app';

const app = express();

middleware.setup(app);

app.use(express.static('static'));

app.get('*', (req, res) => {
  const store = configureStore();
  const context = {};

  const rootComponent = (
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <Route path={'/'} component={App} />
      </Router>
    </Provider>
  );

  store
    .runSaga(sagas)
    .done.then(() => {
      const head = Helmet.rewind();
      const initialState = JSON.stringify(store.getState());
      const markup = renderToString(rootComponent);
      res.render('index', { head, markup, initialState });
    })
    .catch(error => {
      res.status(STATUS_500).send(error);
    });

  renderToString(rootComponent);
  store.close();
});

export default app;
