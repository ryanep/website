import * as types from '@constants/action-types';

const initialState = {
	isLoading: false,
	page: {}
};

export default function pageDidChange(state = initialState, action) {
	switch (action.type) {
		case types.PAGE_IS_LOADING:
			return { ...state, isLoading: action.isLoading };
		case types.PAGE_FETCH_SUCCESS:
			return { ...state, page: action.data.page };
		default:
			return state;
	}
}