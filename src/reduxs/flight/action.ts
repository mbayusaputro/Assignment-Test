import {Dispatch} from 'redux';
import {
  FLIGHTORDERHISTORY,
  FLIGHTORDERHISTORY_SUCCESS,
  FLIGHTORDERHISTORY_FAILED,
} from './types';
import {orderHistoryFlight} from '../../services/api';

const flightOrderHistoryType: string = 'flightOrderHistoryType';

const requestState = (type: string) => {
  if (type === flightOrderHistoryType) {
    return {
      type: FLIGHTORDERHISTORY,
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
  }
};

const failedState = (type: string, message: any, payload: any) => {
  if (type === flightOrderHistoryType) {
    return {
      type: FLIGHTORDERHISTORY_FAILED,
      message,
      payload,
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
