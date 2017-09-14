import * as types from '@constants/action-types';

export const pageFetchRequest = slug => {
  return {
    type: types.PAGE_FETCH_REQUEST,
    slug
  };
};

export const pageFetchSuccess = data => {
  return {
    type: types.PAGE_FETCH_SUCCESS,
    data
  };
};

export const pageFetchFailure = error => {
  return {
    type: types.PAGE_FETCH_FAILURE,
    error
  };
};
