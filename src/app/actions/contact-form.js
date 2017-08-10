import * as types from '../constants/action-types';

export const contactFormRequest = (name, subject, email, message) => {
  return {
    type: types.CONTACT_FORM_REQUEST,
    name,
    subject,
    email,
    message
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
