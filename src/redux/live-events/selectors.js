import { createSelector } from 'reselect';

const liveEventsSelector = state => state.liveEvents;

export const selectLiveEvents = createSelector(
  [liveEventsSelector],
  liveEvents => liveEvents
);
