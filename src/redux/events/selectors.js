import { createSelector } from 'reselect';

const eventsSelector = state => state.events;

export const selectWeeklyFigures = createSelector(
  [eventsSelector],
  events => events
);
