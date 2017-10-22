import { all, fork } from 'redux-saga/effects';
import watchPageRequests from './pages';
import watchContactFormRequests from './contact-form';

export default function* root() {
  yield all([fork(watchPageRequests), fork(watchContactFormRequests)]);
}
