import { fork } from 'redux-saga/effects';
import watchPageRequests from './pages';
import watchContactFormRequests from './contact-form';

export default function* root() {
  yield [fork(watchPageRequests), fork(watchContactFormRequests)];
}
