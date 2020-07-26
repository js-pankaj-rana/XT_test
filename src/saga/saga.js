import { takeLatest, put, call } from 'redux-saga/effects';
import {
    REQUEST_NEWS_API,
    FAILURE_NEWS_API,
    SUCCESS_NEWS_API
} from './../constants/constant.action';

import {getCommentApi} from './../services'


function* getComment(action) {
  console.log("action", action )
  try {
    const result = yield call(getCommentApi, action.payload );
    yield put({
      type: SUCCESS_NEWS_API,
      payload: result.data
    });
  } catch (error) {
    yield put({ type: FAILURE_NEWS_API, payload: error });
  }
}

export function* getCommentRequest() {
  yield takeLatest(REQUEST_NEWS_API, getComment);
}
