import express from 'express';
import { match } from 'react-router';
import routes from '../app/routes';
import * as middleware from './middleware';
import config from './config';
import { handleRender, handleNotFound } from './render';

const app = express();

middleware.setup(app);

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		handleRender(res, props);
	});
});

app.listen(config.app.port, () => {
	console.log(`Serving site on port ${config.app.port}`);
});