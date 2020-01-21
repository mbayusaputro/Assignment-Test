import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchFlightsOrderHistory = (state: AppState) =>
  state.flight.fetchFlightsOrderHistory;
const makeFlightsOrderHistory = (state: AppState) =>
  state.flight.flightsOrderHistory;

export const getFetchFlightsOrderHistory = createSelector(
  makeFetchFlightsOrderHistory,
  i => i,
);

export const getFlightsOrderHistory = createSelector(
  makeFlightsOrderHistory,
  i => i,
);
