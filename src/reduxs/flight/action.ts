import {Dispatch} from 'redux';
import {
  FLIGHTORDERHISTORY,
  FLIGHTORDERHISTORY_SUCCESS,
  FLIGHTORDERHISTORY_FAILED,
  GET_FLIGHT,
  GET_FLIGHT_FAILED,
  GET_FLIGHT_SUCCESS,
  BOOKING_FLIGHT,
  BOOKING_FLIGHT_FAILED,
  BOOKING_FLIGHT_SUCCESS,
} from './types';
import {orderHistoryFlight, getFlight, bookingFlight} from '../../services/api';

const flightOrderHistoryType: string = 'flightOrderHistoryType';
const flight: string = 'flight';
const booking: string = 'booking';

const requestState = (type: string) => {
  if (type === flightOrderHistoryType) {
    return {
      type: FLIGHTORDERHISTORY,
    };
  } else if (type === flight) {
    return {
      type: GET_FLIGHT,
    };
  } else if (type === booking) {
    return {
      type: BOOKING_FLIGHT,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === flightOrderHistoryType) {
    return {
      type: FLIGHTORDERHISTORY_SUCCESS,
      data,
      payload,
    };
  } else if (type === flight) {
    return {
      type: GET_FLIGHT_SUCCESS,
      data,
    };
  } else if (type === booking) {
    return {
      type: BOOKING_FLIGHT_SUCCESS,
      data,
    };
  }
};

const failedState = (type: string, message: any, payload: any) => {
  if (type === flightOrderHistoryType) {
    return {
      type: FLIGHTORDERHISTORY_FAILED,
      message,
      payload,
    };
  } else if (type === flight) {
    return {
      type: GET_FLIGHT_FAILED,
      message,
    };
  } else if (type === booking) {
    return {
      type: BOOKING_FLIGHT_FAILED,
      message,
    };
  }
};

// ====================== FLIGHTS - ORDER HISTORY ======================
export const actionFlightsOrderHistory = (token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(flightOrderHistoryType));
    try {
      const res = await orderHistoryFlight(token);
      if (res.success) {
        const payload = {
          data: res.data,
          meta: res.meta,
        };
        return dispatch(successState(flightOrderHistoryType, payload, token));
      }
      return dispatch(failedState(flightOrderHistoryType, res.message, token));
    } catch (err) {
      return dispatch(failedState(flightOrderHistoryType, err.message, token));
    }
  };
};
// ====================== FLIGHTS - ORDER HISTORY ======================

// ====================== FLIGHTS - SEARCH ======================
export const actionGetFlight = (payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(flight));
    try {
      const res = await getFlight(payload);
      if (res.status) {
        return dispatch(successState(flight, res.data, payload));
      }
      return dispatch(failedState(flight, res.message, payload));
    } catch (err) {
      return dispatch(failedState(flight, err.message, payload));
    }
  };
};
// ====================== FLIGHTS - SEARCH ======================

// ====================== FLIGHTS - BOOKING ======================
export const actionBookingFlight = (payload: object, token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(booking));
    try {
      const res = await bookingFlight(payload, token);
      if (res.status) {
        return dispatch(successState(booking, res, payload));
      }
      return dispatch(failedState(booking, res.message, payload));
    } catch (err) {
      return dispatch(failedState(booking, err.message, payload));
    }
  };
};
// ====================== FLIGHTS - BOOKING ======================
