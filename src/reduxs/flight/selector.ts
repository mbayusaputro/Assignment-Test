import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchFlightsOrderHistory = (state: AppState) =>
  state.flight.fetchFlightsOrderHistory;

export const getFetchFlightsOrderHistory = createSelector(
  makeFetchFlightsOrderHistory,
  i => i,
);
