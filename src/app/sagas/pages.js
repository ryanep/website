import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as pageActions from '@actions/page';
import * as types from '@constants/action-types';
import * as api from '@constants/api';

export const fetchPageData = slug => {
  return fetch(`${api.apiURL}/pages/?page=${slug}`).then(response =>
    response.json()
  );
};

export const getPage = function*(action) {
  try {
    yield put(pageActions.pageIsLoading(true));
    const data = yield call(fetchPageData, action.slug);
    yield put(pageActions.fetchPageSuccess(data));
    yield put(pageActions.pageIsLoading(false));
  } catch (err) {
    yield put(pageActions.fetchPageError(err));
    yield put(pageActions.pageIsLoading(false));
  }
};

export default function* watchPageRequests() {
  yield takeEvery(types.PAGE_FETCH_REQUEST, getPage);
}
