import { createSelector } from 'reselect';

const transactionsSelector = state => state.transactions;

export const selectEvents = createSelector(
  [transactionsSelector],
  transactions => transactions
);
