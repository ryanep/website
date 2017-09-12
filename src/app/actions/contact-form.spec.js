import * as actions from './contact-form';
import * as types from '@constants/action-types';

describe('actions/contact-form', () => {
  const payload = {
    name: '__name__',
    subject: '__subject__',
    email: '__email__',
    message: '__message__'
  };
  const response = {};
  const error = new Error('Error');

  describe('contactFormRequest', () => {
    it('return PAGE_FETCH_REQUEST action type', () => {
      expect(actions.contactFormRequest(payload)).toMatchObject({
        type: types.CONTACT_FORM_REQUEST
      });
    });

    it('returns payload object', () => {
      expect(actions.contactFormRequest(payload)).toMatchObject({
        payload
      });
    });
  });

  describe('contactFormSuccess', () => {
    it('return CONTACT_FORM_SUCCESS action type', () => {
      expect(actions.contactFormSuccess(response)).toMatchObject({
        type: types.CONTACT_FORM_SUCCESS
      });
    });

    it('returns a response value ', () => {
      expect(actions.contactFormSuccess(response)).toMatchObject({
        response
      });
    });
  });

  describe('contactFormFailure', () => {
    it('return CONTACT_FORM_FAILURE action type', () => {
      expect(actions.contactFormFailure(error)).toMatchObject({
        type: types.CONTACT_FORM_FAILURE
      });
    });

    it('returns an error object', () => {
      expect(actions.contactFormFailure(error)).toMatchObject({
        error
      });
    });
  });
});
