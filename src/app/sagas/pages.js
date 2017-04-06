import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as pageActions from '../actions/page';
import * as types from '../constants/action-types';
import * as api from '../constants/api';

export function* getPage(action) {
	try {
		const response = yield call(fetch, `${api.apiURL}/pages/?page=${action.slug}`);
        const res = yield response.json();

		yield put(pageActions.fetchPageSuccess(res));

	} catch(err) {
		yield put(pageActions.fetchPageError(err));
	}
}

export default function* watchPageRequests() {
	yield takeEvery(types.PAGE_FETCH_REQUEST, getPage);
}