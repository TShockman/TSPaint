import {compose, createStore as createReduxStore, combineReducers, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware, {END} from 'redux-saga';
import rootSaga from './saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// create the redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

export function createStore() {
  const store = createReduxStore(
      combineReducers(reducers),
      composeWithDevTools(applyMiddleware(sagaMiddleware)));

  // kick off redux-saga root
  sagaMiddleware.run(rootSaga);

  // dispatch END to close down store when the time comes
  store.close = () => store.dispatch(END);
  return store;
}