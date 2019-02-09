import {compose, createStore as createReduxStore, combineReducers} from 'redux';
import reducers from './reducers';

export function createStore() {
  return createReduxStore(
      combineReducers(reducers),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}