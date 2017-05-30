import { fork } from 'redux-saga/effects';
import watchPageRequests from './pages';

export default function *root() {
    yield [
        fork(watchPageRequests)
    ];
}