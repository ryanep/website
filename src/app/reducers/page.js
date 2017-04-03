import * as types from '../constants/action-types';

const initialState = {};

export default function pageDidChange(state = initialState, action) {
	console.log(action.type);
	switch (action.type) {
		case types.PAGE_IS_LOADING:
			return action.isLoading;
		case types.PAGE_FETCH_SUCCESS:
			return action.data.page;
		default:
			return state;
	}
}