import {createSelector} from 'reselect';
import {AppState} from '../reducers';

const makeFetchHolidayList = (state: AppState) =>
  state.holiday.fetchHolidayList;

const makeFetchHolidayDetail = (state: AppState) =>
  state.holiday.fetchHolidayDetail;

const makeFetchHolidayBooking = (state: AppState) =>
  state.holiday.fetchHolidayBooking;

const makeAddOn = (state: AppState) => state.holiday.addon;
const makeDataHoliday = (state: AppState) => state.holiday.dataHoliday;
const makeDataHotel = (state: AppState) => state.holiday.dataHotel;
const makeDataFlight = (state: AppState) => state.holiday.dataFlight;

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

export const getAddon = createSelector(
  makeAddOn,
  i => i,
);

export const getDataHoliday = createSelector(
  makeDataHoliday,
  i => i,
);

export const getDataHotel = createSelector(
  makeDataHotel,
  i => i,
);

export const getDataFlight = createSelector(
  makeDataFlight,
  i => i,
);
