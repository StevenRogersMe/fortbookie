import { takeLatest, put } from 'redux-saga/effects';
import { fetchLiveEventsRequest, fetchLiveEventsSuccess, fetchLiveEventsFailure } from './actions';
import EventsService from 'services/events-service';
const eventsService = new EventsService();

function* fetchLiveEventsDataWorker() {
  try {
    const data = yield eventsService.getEvents();
    yield put(fetchLiveEventsSuccess(data));
  } catch ({ message }) {
    yield put(fetchLiveEventsFailure(message));
  }
}

export function* fetchLiveEventsData() {
  yield takeLatest(fetchLiveEventsRequest().type, fetchLiveEventsDataWorker);
}
