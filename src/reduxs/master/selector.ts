import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchCountry = (state: AppState) => state.master.fetchCountry;
const makeCountry = (state: AppState) => state.master.country;

export const getFetchCountry = createSelector(makeFetchCountry, i => i);

export const getCountry = createSelector(makeCountry, i => i);
