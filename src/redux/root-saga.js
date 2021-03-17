import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchEventsData } from './events/sagas';

function* rootSaga() {
  yield all([
    call(fetchEventsData),
  ]);
}

export default rootSaga;
