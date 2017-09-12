import * as types from '@constants/action-types';

export const contactFormRequest = payload => {
  return {
    type: types.CONTACT_FORM_REQUEST,
    payload
  };
};

export const contactFormSuccess = response => {
  return {
    type: types.CONTACT_FORM_SUCCESS,
    response
  };
};

export const contactFormFailure = error => {
  return {
    type: types.CONTACT_FORM_FAILURE,
    error
  };
};
