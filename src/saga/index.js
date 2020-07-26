import { all } from 'redux-saga/effects';
import { getCommentRequest } from './saga';

export default function* root() {
  yield all([
    getCommentRequest()
  ]);
}
