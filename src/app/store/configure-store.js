import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from '../reducers';

export default function configureStore(preloadedState) {
	const initialState = preloadedState || {};
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, initialState, applyMiddleware(thunk, sagaMiddleware));
    
    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    
    return store;
}