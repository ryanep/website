import fetch from 'isomorphic-fetch';
import * as api from '../constants/api';
import * as types from '../constants/action-types';

export function pageIsLoading(isLoading) {
	return {
		type: types.PAGE_IS_LOADING,
		isLoading: isLoading
	};
}

export function fetchPageRequest(slug) {
	return {
		type: types.PAGE_FETCH_REQUEST,
		slug: slug
	};
}

export function fetchPageSuccess(data) {
	return {
		type: types.PAGE_FETCH_SUCCESS,
		data: data
	};
}

export function fetchPageError(error) {
	return {
		type: types.PAGE_FETCH_ERROR,
		error: error
	};
}