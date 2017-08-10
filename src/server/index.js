import express from 'express';
import React from 'react';
import Helmet from 'react-helmet';
import * as middleware from './middleware';
import config from './config';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { Route } from 'react-router-dom';
import { STATUS_500 } from '@constants/status-types';
import configureStore from '@store/configure-store';
import sagas from '@sagas';
import App from '@containers/app';

const app = express();
const store = configureStore();

middleware.setup(app);

app.get('/send', (req, res) => {
  const { name, subject, email, message } = req.query;

  if (name && subject && email && message) {
    res.json({
      success: 200,
      message: 'Email sent.'
    });
  } else {
    res.json({
      success: 500,
      message: 'An error occured. Please try again.'
    });
  }
});

app.get('*', (req, res) => {
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
      res.status(STATUS_500).send(error.message);
    });

  renderToString(rootComponent);
  store.close();
});

app.listen(config.app.port, () => {
  console.log(`Serving site on port ${config.app.port}`); // eslint-disable-line no-console
});
