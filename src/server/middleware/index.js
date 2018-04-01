import helmet from 'helmet';
import compression from 'compression';

export default [helmet(), compression()];
