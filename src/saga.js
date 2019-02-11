import {all, fork} from 'redux-saga/effects';
import sidebarSaga from './app/modules/sidebar/saga';

// combine all the module sagas
export default function * rootSaga() {
  yield all([
    fork(sidebarSaga)
  ]);
}
