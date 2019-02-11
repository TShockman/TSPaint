import {all, fork, takeEvery, call, put} from 'redux-saga/effects';
import {IMPORT_PAINTING_REQUESTED, IMPORT_PAINTING_FULFILLED} from './actions';

// borrowed from https://github.com/redux-saga/redux-saga/issues/1665
function readAsText(blob) {
  return new Promise((resolve, reject) => {
    const reader  = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsText(blob);
  });
}

function * importPainting({fileBlob}) {
  const jsonString = yield call(readAsText, fileBlob);
  const painting = JSON.parse(jsonString);
  return yield put({type: IMPORT_PAINTING_FULFILLED, painting});
}

export default function * rootSaga () {
  yield all([
    fork(takeEvery, IMPORT_PAINTING_REQUESTED, importPainting)
  ]);
}