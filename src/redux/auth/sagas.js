import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchSignIn } from './sign-in/sagas';

function* authSagas() {
  yield all([
    call(fetchSignIn),
  ]);
}

export default authSagas;
