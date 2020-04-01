import {Dispatch} from 'redux';
import {
  HOLIDAYLIST,
  HOLIDAYLIST_SUCCESS,
  HOLIDAYLIST_FAILED,
  HOLIDAYDETAIL,
  HOLIDAYDETAIL_SUCCESS,
  HOLIDAYDETAIL_FAILED,
  HOLIDAYBOOKING,
  HOLIDAYBOOKING_SUCCESS,
  HOLIDAYBOOKING_FAILED,
  ADDON,
  DATAHOLIDAY,
  DATAHOTEL,
  DATAFLIGHT,
} from './types';
import {holidayList, holidayDetail, holidayBooking} from '../../services/api';

const listType = 'listType';
const detailType = 'detailType';
const bookType = 'bookType';

const requestState = (type: string) => {
  if (type === listType) {
    return {
      type: HOLIDAYLIST,
    };
  } else if (type === detailType) {
    return {
      type: HOLIDAYDETAIL,
    };
  } else if (type === bookType) {
    return {
      type: HOLIDAYBOOKING,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === listType) {
    return {
      type: HOLIDAYLIST_SUCCESS,
      data,
      payload,
    };
  } else if (type === detailType) {
    return {
      type: HOLIDAYDETAIL_SUCCESS,
      data,
      payload,
    };
  } else if (type === bookType) {
    return {
      type: HOLIDAYBOOKING_SUCCESS,
      data,
      payload,
    };
  }
};

const failedState = (type: string, message: any, payload: any) => {
  if (type === listType) {
    return {
      type: HOLIDAYLIST_FAILED,
      message,
      payload,
    };
  } else if (type === detailType) {
    return {
      type: HOLIDAYDETAIL_FAILED,
      message,
      payload,
    };
  } else if (type === bookType) {
    return {
      type: HOLIDAYBOOKING_FAILED,
      message,
      payload,
    };
  }
};

export const actionHolidayList = (token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(listType));
    try {
      const res = await holidayList(token);
      if (res.success) {
        return dispatch(successState(listType, res.data, token));
      }
      return dispatch(failedState(listType, res.message, token));
    } catch (err) {
      return dispatch(failedState(listType, err.message, token));
    }
  };
};

export const actionHolidayDetail = (token: string, id: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(detailType));
    const payload = {token, id};
    try {
      const res = await holidayDetail(token, id);
      if (res.success) {
        return dispatch(successState(detailType, res.data, payload));
      }
      return dispatch(failedState(detailType, res.message, payload));
    } catch (err) {
      return dispatch(failedState(detailType, err.message, payload));
    }
  };
};

export const actionHolidayBook = (payload: object, token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(bookType));
    try {
      const res = await holidayBooking(payload, token);
      if (res.success) {
        return dispatch(successState(bookType, res.data, payload));
      } else {
        return dispatch(failedState(bookType, res.message, payload));
      }
    } catch (err) {
      return dispatch(failedState(bookType, err.message, payload));
    }
  };
};

export const actionAddon = (data: any) => ({
  type: ADDON,
  data,
});

export const actionDataHoliday = (data: any) => ({
  type: DATAHOLIDAY,
  data,
});

export const actionDataHotel = (data: any) => ({
  type: DATAHOTEL,
  data,
});

export const actionDataFlight = (data: any) => ({
  type: DATAFLIGHT,
  data,
});
