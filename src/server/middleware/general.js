import compression from 'compression';

export default function setupGeneralMiddleware(app) {
	app.use(compression());
}
