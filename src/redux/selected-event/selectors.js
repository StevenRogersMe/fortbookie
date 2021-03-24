import { createSelector } from 'reselect';

const selectedEventSelector = state => state.selectedEvent;

export const selectSelectedEvent = createSelector(
  [selectedEventSelector],
  selectedEvent => selectedEvent
);
