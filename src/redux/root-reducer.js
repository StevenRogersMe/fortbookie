import { combineReducers } from 'redux';
import events from 'redux/events/reducer';
import betSlips from 'redux/bet-slips/reducer';
import openBets from 'redux/open-bets/reducer';
import transactions from 'redux/transactions/reducer';
import liveEvents from 'redux/live-events/reducer';
import playerRankings from 'redux/player-rankings/reducer';

const rootReducer = combineReducers({
  events,
  betSlips,
  openBets,
  transactions,
  liveEvents,
  playerRankings
});

export default rootReducer;
