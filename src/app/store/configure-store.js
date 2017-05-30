import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducers from '../reducers';

export default function configureStore(history, initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, initialState, applyMiddleware(sagaMiddleware));

    store.runSaga = sagaMiddleware.run;
    store.close = () => store.dispatch(END);
    return store;
}