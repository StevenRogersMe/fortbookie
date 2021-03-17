import { takeLatest, put } from 'redux-saga/effects';
import { eventsRequested, eventsLoaded, eventsError } from './actions';
import EventsService from 'services/events-service';
const eventsService = new EventsService();

function* fetchEventsDataWorker() {
  try {
    const data = yield eventsService.getEvents();
    yield put(eventsLoaded(data));
  } catch ({ message }) {
    yield put(eventsError(message));
  }
}

export function* fetchEventsData() {
  yield takeLatest(eventsRequested().type, fetchEventsDataWorker);
}
