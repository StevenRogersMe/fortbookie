import { LiveEventsTypes } from './types';

export const fetchLiveEventsRequest = () => ({
  type: LiveEventsTypes.FETCH_LIVE_EVENTS_REQUEST,
});
export const fetchLiveEventsSuccess = data => ({
  type: LiveEventsTypes.FETCH_LIVE_EVENTS_SUCCESS,
  payload: data
});
export const fetchLiveEventsFailure = error => ({
  type: LiveEventsTypes.FETCH_LIVE_EVENTS_FAILURE,
  payload: error
});
