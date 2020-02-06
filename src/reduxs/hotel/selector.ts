import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchListDestinationHotel = (state: AppState) =>
  state.hotel.fetchDestination;
const makeFetchSearchHotel = (state: AppState) => state.hotel.fetchSearch;
const makePathAsset = (state: AppState) => state.hotel.pathAsset;

export const getFetchListDestinationHotel = createSelector(
  makeFetchListDestinationHotel,
  i => i,
);

export const getFetchSearchHotel = createSelector(
  makeFetchSearchHotel,
  i => i,
);

export const getPathAsset = createSelector(
  makePathAsset,
  i => i,
);
