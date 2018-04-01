import app from './app';
import config from './config';

app.listen(config.app.APP_PORT, () => {
  console.log(`Server listening on port ${config.app.APP_PORT}`); // eslint-disable-line no-console
});
