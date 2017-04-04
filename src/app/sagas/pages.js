import { takeEvery } from 'redux-saga';
import { call, put, select } from 'redux-saga/effects';
import * as pageActions from '../actions/page';
import * as types from '../constants/action-types';

export function* getPage(action) {
	console.log('PAGE_FETCH_REQUEST: ' + action);

	try {

		let testData = {
			"status": 200,
			"message": "Success",
			"page": {
				"page": {
					"title": "Home",
					"description": "My name is Ryan Elliott-Potter and I am a web developer from Northamptonshire."
				},
				"about": {
					"title": "About Me",
					"desc": "My name is **Ryan Elliott-Potter** and I am a software engineer and web developer. I have a passion for all types of technology and enjoy developing software and web applications.",
					"buttonText": "Learn more",
					"buttonURL": "/about"
				}
			}
		};

		console.log(testData);

		yield put(pageActions.fetchPageSuccess(testData));

	} catch(err) {
		yield put(pageActions.fetchPageError(err));
	}
}

export default function* watchPageRequests() {
	yield takeEvery(types.PAGE_FETCH_REQUEST, getPage);
}