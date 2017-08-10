import * as types from '@constants/action-types';

const initialState = {
  isLoading: false,
  success: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACT_FORM_REQUEST:
      return { ...state, isLoading: true };
    case types.CONTACT_FORM_SUCCESS:
      return { ...state, success: action.success, isLoading: false };
    case types.CONTACT_FORM_FAILURE:
      return { ...state, error: action.error, isLoading: false };
    default:
      return state;
  }
};
