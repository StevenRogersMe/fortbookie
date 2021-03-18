import { combineReducers } from 'redux';
import events from 'redux/events/reducer';
import betSlips from 'redux/bet-slips/reducer';
import openBets from 'redux/open-bets/reducer';

const rootReducer = combineReducers({
  events,
  betSlips,
  openBets
});

export default rootReducer;
