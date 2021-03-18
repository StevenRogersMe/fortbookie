import { OpenBetsTypes } from './types';

export const openBetsRequested = () => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_REQUEST,
});
export const openBetsLoaded = data => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_SUCCESS,
  payload: data
});
export const openBetsError = error => ({
  type: OpenBetsTypes.FETCH_OPEN_BETS_FAILURE,
  payload: error
});
