import { takeLatest, put } from 'redux-saga/effects';
import { openBetsRequested, openBetsLoaded, openBetsError } from './actions';
import OpenBetsService from 'services/open-bets-service';
const openBetsService = new OpenBetsService();

function* fetchOpenBetsDataWorker() {
  try {
    const data = yield openBetsService.getOpenBets();
    yield put(openBetsLoaded(data));
  } catch ({ message }) {
    yield put(openBetsError(message));
  }
}

export function* fetchOpenBetsData() {
  yield takeLatest(openBetsRequested().type, fetchOpenBetsDataWorker);
}
