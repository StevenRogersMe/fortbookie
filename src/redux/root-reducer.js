import { combineReducers } from 'redux';
import events from 'redux/events/reducer';
import betSlips from 'redux/bet-slips/reducer';

const rootReducer = combineReducers({
  events,
  betSlips
});

export default rootReducer;
