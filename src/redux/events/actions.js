import { EventsTypes } from './types';

export const eventsRequested = () => ({
  type: EventsTypes.FETCH_EVENTS_REQUEST,
});
export const eventsLoaded = data => ({
  type: EventsTypes.FETCH_EVENTS_SUCCESS,
  payload: data
});
export const eventsError = error => ({
  type: EventsTypes.FETCH_EVENTS_FAILURE,
  payload: error
});
