import express from 'express';
import { match } from 'react-router';
import routes from '../app/routes';
import * as middleware from './middleware';
import config from './config';
import { handleRender } from './render';

const app = express();

middleware.setup(app);

app.get('/send', (req, res) => {
	const { name, subject, email, message } = req.query;

	if (name && subject && email && message) {
		res.json({
			'success': 200,
			'message': 'Email sent.'
		});
	} else {
		res.json({
			'success': 500,
			'message': 'An error occured. Please try again.'
		});
	}
});

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		handleRender(res, props);
	});
});

app.listen(config.app.port, () => {
	console.log(`Serving site on port ${config.app.port}`); // eslint-disable-line no-console
});