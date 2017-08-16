import compression from 'compression';
import secure from 'express-force-https';

export default function setupGeneralMiddleware(app) {
  app.use(compression());
  app.use(secure);
}
