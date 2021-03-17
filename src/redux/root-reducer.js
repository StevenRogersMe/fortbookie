import { combineReducers } from 'redux';
import events from 'redux/events/reducer';

const rootReducer = combineReducers({
  events
});

export default rootReducer;
