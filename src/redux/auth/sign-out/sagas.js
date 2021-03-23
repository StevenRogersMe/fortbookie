import { takeLatest, put, delay } from 'redux-saga/effects';
import { signOutRequest, signOutSuccess, signOutFailure } from './actions';
import history from '../../../history';

function* fetchSignOutWorker() {
  try {
    yield put(signOutSuccess());
    yield delay(1000);
    // remove user from the local storage
    localStorage.removeItem('user');
    // redirect to home
    history.push('/');
    window.location.reload();
  } catch ({ message }) {
    yield put(signOutFailure(message));
  }
}

export function* fetchSignOut() {
  yield takeLatest(signOutRequest().type, fetchSignOutWorker);
}
