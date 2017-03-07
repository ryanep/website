import express from 'express';
import { match } from 'react-router';
import compression from 'compression';
import config from './config';
import routes from '../app/routes';
import { handleRender, handleNotFound } from './render';

const app = express();

app.set('views', process.cwd() + '/src/server/views');
app.set('view engine', 'ejs');

app.use(compression());

app.use(express.static('dist/public'));

app.get('*', (req, res) => {
	match({ routes, location: req.url }, (err, redirect, props) => {
		if (props) {
			handleRender(res, props);
		} else {
			handleNotFound(res);
		}
	});
});

app.listen(config.app.port, () => {
	console.log(`Serving site on port ${config.app.port}`);
});