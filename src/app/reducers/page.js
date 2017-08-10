import * as types from '@constants/action-types';

const initialState = {
  isLoading: false,
  page: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PAGE_FETCH_REQUEST:
      return { ...state, isLoading: true };
    case types.PAGE_FETCH_SUCCESS:
      return { ...state, page: action.data.page, isLoading: false };
    case types.PAGE_FETCH_FAILURE:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};
