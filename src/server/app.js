import path from 'path';
import express from 'express';
import React from 'react';
import Helmet from 'react-helmet';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router';
import { Route } from 'react-router-dom';
import configureStore from '@store/configure-store';
import sagas from '@sagas';
import App from '@containers/app';
import middleware from './middleware';

const app = express();

app.use(...middleware);

app.set('views', path.resolve('./views/'));
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  const store = configureStore();
  const context = {};

  const rootComponent = (
    <Provider store={store}>
      <Router location={req.url} context={context}>
        <Route path="/" component={App} />
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
      res.status(500).send(error);
    });

  renderToString(rootComponent);
  store.close();
});

export default app;