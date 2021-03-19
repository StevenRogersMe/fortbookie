import { all, call } from 'redux-saga/effects';
// Sagas
import { fetchEventsData } from './events/sagas';
import { fetchOpenBetsData } from './open-bets/sagas';
import { fetchTransactionsData } from './transactions/sagas';

function* rootSaga() {
  yield all([
    call(fetchEventsData),
    call(fetchOpenBetsData),
    call(fetchTransactionsData),
  ]);
}

export default rootSaga;
