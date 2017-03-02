import express from 'express';
import config from './config';

const app = express();

app.listen(config.app.port, () => {
	console.log(`Serving site on port ${config.app.port}`);
});