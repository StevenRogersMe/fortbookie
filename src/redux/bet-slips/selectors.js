import { createSelector } from 'reselect';

const betSlipsSelector = state => state.betSlips;

export const selectBetSlips = createSelector(
  [betSlipsSelector],
  betSlips => betSlips
);
