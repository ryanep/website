import * as types from '@constants/action-types';

const initialState = {
  isFetching: false,
  error: null,
  page: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PAGE_FETCH_REQUEST:
      return { ...state, isFetching: true };
    case types.PAGE_FETCH_SUCCESS:
      return { ...state, page: action.data.page, isFetching: false };
    case types.PAGE_FETCH_FAILURE:
      return { ...state, error: action.error, isFetching: false };
    default:
      return state;
  }
};
