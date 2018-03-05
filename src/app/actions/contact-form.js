import * as types from '@constants/action-types';

export const contactFormRequest = payload => ({
  type: types.CONTACT_FORM_REQUEST,
  payload
});

export const contactFormSuccess = response => ({
  type: types.CONTACT_FORM_SUCCESS,
  response
});

export const contactFormFailure = error => ({
  type: types.CONTACT_FORM_FAILURE,
  error
});
