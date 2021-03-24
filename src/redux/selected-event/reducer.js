import { selectedEventTypes } from './types';

const INITIAL_STATE = 'nae'

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case selectedEventTypes.SET_SELECTED_EVENT:
      return action.payload
    default:
      return state;
  }
};

export default reducer;
