import { fetchState } from 'redux/_utils/fetch-state';
import { LiveEventsTypes } from './types';

const INITIAL_STATE = fetchState('initial');

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LiveEventsTypes.FETCH_LIVE_EVENTS_REQUEST:
      return fetchState('request');
    case LiveEventsTypes.FETCH_LIVE_EVENTS_SUCCESS:
      return fetchState('success', action.payload);
    case LiveEventsTypes.FETCH_LIVE_EVENTS_FAILURE:
      return fetchState('failure', action.payload);
    default:
      return state;
  }
};

export default reducer;
