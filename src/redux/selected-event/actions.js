import { selectedEventTypes } from './types';

export const setSelectedEvent = event => ({
  type: selectedEventTypes.SET_SELECTED_EVENT,
  payload: event
});
