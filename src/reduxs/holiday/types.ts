export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchHolidayList: boolean;
  fetchHolidayDetail: boolean;
  fetchHolidayBooking: boolean;

  // new feature
  addon: boolean;
  dataHoliday: any;
  dataHotel: any;
  dataFlight: any;
}

// Holiday List
export const HOLIDAYLIST = 'HOLIDAYLIST';
export const HOLIDAYLIST_SUCCESS = 'HOLIDAYLIST_SUCCESS';
export const HOLIDAYLIST_FAILED = 'HOLIDAYLIST_FAILED';

// Holiday Detail
export const HOLIDAYDETAIL = 'HOLIDAYDETAIL';
export const HOLIDAYDETAIL_SUCCESS = 'HOLIDAYDETAIL_SUCCESS';
export const HOLIDAYDETAIL_FAILED = 'HOLIDAYDETAIL_FAILED';

// Holiday Booking
export const HOLIDAYBOOKING = 'HOLIDAYBOOKING';
export const HOLIDAYBOOKING_SUCCESS = 'HOLIDAYBOOKING_SUCCESS';
export const HOLIDAYBOOKING_FAILED = 'HOLIDAYBOOKING_FAILED';

// ADD ON NEW FEATURE
export const ADDON = 'ADDON';
export const DATAHOLIDAY = 'DATAHOLIDAY';
export const DATAHOTEL = 'DATAHOTEL';
export const DATAFLIGHT = 'DATAFLIGHT';
