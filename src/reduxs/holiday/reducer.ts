import {
  State,
  Action,
  HOLIDAYLIST,
  HOLIDAYLIST_SUCCESS,
  HOLIDAYLIST_FAILED,
  HOLIDAYDETAIL,
  HOLIDAYDETAIL_SUCCESS,
  HOLIDAYBOOKING,
  HOLIDAYBOOKING_SUCCESS,
  HOLIDAYBOOKING_FAILED,
  ADDON,
  DATAHOLIDAY,
  DATAHOTEL,
  DATAFLIGHT,
} from './types';

const initialState: State = {
  fetchHolidayList: false,
  fetchHolidayDetail: false,
  fetchHolidayBooking: false,

  // New Feature
  addon: false,
  dataHoliday: null,
  dataHotel: null,
  dataFlight: null,
};

export default (state: State = initialState, action: Action): State => {
  let {type} = action;
  switch (type) {
    // HOLIDAY LIST
    case HOLIDAYLIST:
      return {
        ...state,
        fetchHolidayList: true,
      };
    case HOLIDAYLIST_SUCCESS:
      return {
        ...state,
        fetchHolidayList: false,
      };
    case HOLIDAYLIST_FAILED:
      return {
        ...state,
        fetchHolidayList: false,
      };

    // HOLIDAY DETAIL
    case HOLIDAYDETAIL:
      return {
        ...state,
        fetchHolidayDetail: true,
      };
    case HOLIDAYDETAIL_SUCCESS:
      return {
        ...state,
        fetchHolidayDetail: false,
      };
    case HOLIDAYLIST_FAILED:
      return {
        ...state,
        fetchHolidayDetail: false,
      };

    // HOLIDAY BOOKING
    case HOLIDAYBOOKING:
      return {
        ...state,
        fetchHolidayBooking: true,
      };
    case HOLIDAYBOOKING_SUCCESS:
      return {
        ...state,
        fetchHolidayBooking: false,
      };
    case HOLIDAYBOOKING_FAILED:
      return {
        ...state,
        fetchHolidayBooking: false,
      };

    // NEW FEATURE
    case ADDON:
      return {
        ...state,
        addon: action.data,
      };
    case DATAHOLIDAY:
      return {
        ...state,
        dataHoliday: action.data,
      };
    case DATAHOTEL:
      return {
        ...state,
        dataHotel: action.data,
      };
    case DATAFLIGHT:
      return {
        ...state,
        dataFlight: action.data,
      };

    default:
      return state;
  }
};
