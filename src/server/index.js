import app from './app';
import config from './config';

app.listen(config.app.port, () => {
  console.log(`Server listening on port ${config.app.port}`); // eslint-disable-line no-console
});
