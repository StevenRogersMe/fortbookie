import { takeLatest, put } from 'redux-saga/effects';
import { fetchPlayerRankingsRequest, fetchPlayerRankingsSuccess, fetchPlayerRankingsFailure } from './actions';
import TransactionsService from 'services/transactions-service';
const transactionsService = new TransactionsService();

function* fetchPlayerRankingsDataWorker() {
  try {
    const data = yield transactionsService.getTransactions();
    yield put(fetchPlayerRankingsSuccess(data));
  } catch ({ message }) {
    yield put(fetchPlayerRankingsFailure(message));
  }
}

export function* fetchPlayerRankingsData() {
  yield takeLatest(fetchPlayerRankingsRequest().type, fetchPlayerRankingsDataWorker);
}
