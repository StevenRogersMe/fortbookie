import { takeLatest, put, delay } from 'redux-saga/effects';
import { sessionCheckStart, sessionCheckEnd } from './actions';
import { signInSuccess, signInFailure } from '../sign-in/actions';

function* fetchSessionCheckWorker() {
  try {
    const user = localStorage.getItem('user');
    yield delay(500);
    if (user) {
      yield put(signInSuccess(JSON.parse(user)));
    } else {
      yield put(sessionCheckEnd());
    }
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* fetchSessionCheck() {
  yield takeLatest(sessionCheckStart().type, fetchSessionCheckWorker);
}
