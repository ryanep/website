import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as pageActions from '@actions/page';
import { fetchPageData } from '@services/api';
import * as types from '@constants/action-types';

export const getPage = function*(action) {
  try {
    const response = yield call(fetchPageData, action.slug);
    if (response.error) {
      yield put(pageActions.pageFetchFailure(response.error));
    } else {
      yield put(pageActions.pageFetchSuccess(response));
    }
  } catch (err) {
    yield put(pageActions.pageFetchFailure(err));
  }
};

export default function* watchPageRequests() {
  yield takeEvery(types.PAGE_FETCH_REQUEST, getPage);
}
