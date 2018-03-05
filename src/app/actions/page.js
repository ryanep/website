import * as types from '@constants/action-types';

export const pageFetchRequest = slug => ({
  type: types.PAGE_FETCH_REQUEST,
  slug
});

export const pageFetchSuccess = data => ({
  type: types.PAGE_FETCH_SUCCESS,
  data
});

export const pageFetchFailure = error => ({
  type: types.PAGE_FETCH_FAILURE,
  error
});
