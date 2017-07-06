import * as types from '../constants/action-types';

export const pageIsLoading = isLoading => {
  return {
    type: types.PAGE_IS_LOADING,
    isLoading
  };
};

export const fetchPageRequest = slug => {
  return {
    type: types.PAGE_FETCH_REQUEST,
    slug
  };
};

export const fetchPageSuccess = data => {
  return {
    type: types.PAGE_FETCH_SUCCESS,
    data
  };
};

export const fetchPageError = error => {
  return {
    type: types.PAGE_FETCH_ERROR,
    error
  };
};
