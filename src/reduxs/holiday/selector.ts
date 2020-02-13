import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchHolidayList = (state: AppState) =>
  state.holiday.fetchHolidayList;

const makeFetchHolidayDetail = (state: AppState) =>
  state.holiday.fetchHolidayDetail;

const makeFetchHolidayBooking = (state: AppState) =>
  state.holiday.fetchHolidayBooking;

export const getFetchHolidayList = createSelector(
  makeFetchHolidayList,
  i => i,
);

export const getFetchHolidayDetail = createSelector(
  makeFetchHolidayDetail,
  i => i,
);

export const getFetchHolidayBook = createSelector(
  makeFetchHolidayBooking,
  i => i,
);
