import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as contactFormActions from '@actions/contact-form';
import { contactFormSubmit } from '@services/api';
import * as types from '@constants/action-types';

export const handleContactFormSubmit = function*(action) {
  try {
    const { payload } = action;

    const response = yield call(contactFormSubmit, payload);

    if (response.error) {
      yield put(contactFormActions.contactFormFailure(response.error));
    } else {
      yield put(contactFormActions.contactFormSuccess(response));
    }
  } catch (err) {
    yield put(contactFormActions.contactFormFailure(err));
  }
};

export default function* watchContactFormRequests() {
  yield takeEvery(types.CONTACT_FORM_REQUEST, handleContactFormSubmit);
}
