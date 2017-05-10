import express from 'express';
import * as middleware from './middleware';
import config from './config';
import { handleRender, handleNotFound } from './render';

const app = express();

middleware.setup(app);

app.get('*', (req, res) => {
	handleRender(req, res);
});

app.listen(config.app.port, () => {
	console.log(`Serving site on port ${config.app.port}`);
});