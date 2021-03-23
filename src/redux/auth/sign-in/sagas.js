import { takeLatest, put, delay } from 'redux-saga/effects';
import { signInStart, signInSuccess, signInFailure } from './actions';
// import history from '../../../history';

function* fetchSignInWorker() {
  try {
    const data = {
      name: 'Joanne Brown',
      balance: '1 925,45',
      pending: '95'
    };
    yield delay(1000);
    yield put(signInSuccess(data));
    // write data to the local storage
    localStorage.setItem('user', JSON.stringify(data));
    // redirect to events
    // history.push('/events');
    // window.location.reload();
  } catch ({ message }) {
    yield put(signInFailure(message));
  }
}

export function* fetchSignIn() {
  yield takeLatest(signInStart().type, fetchSignInWorker);
}
