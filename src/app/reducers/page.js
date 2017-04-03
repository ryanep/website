import * as types from '../constants/action-types';

const initialState = {};

export default function pageDidChange(state = initialState, action) {
	console.log(action);
    switch (action.type) {
    	case types.PAGE_IS_LOADING:
			return action.isLoading;
        default:
            return state;
    }
}