import {Dispatch} from 'redux';
import {
  TOP_UP,
  TOP_UP_FAILED,
  TOP_UP_SUCCESS,
  WITHDRAW,
  WITHDRAW_FAILED,
  WITHDRAW_SUCCESS,
} from './types';
import {topUp, withdrawRequest} from '../../services/api';

const topUpDeposit: string = 'topUpDeposit';
const withdraw: string = 'withdraw';

const requestState = (type: string) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP_SUCCESS,
      data,
      payload,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW_SUCCESS,
      data,
      payload,
    };
  }
};

const failedState = (type: string, message: any, payload: any) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP_FAILED,
      message,
      payload,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW_FAILED,
      message,
      payload,
    };
  }
};

// ====================== FLIGHTS - ORDER HISTORY ======================
export const actionTopUp = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(topUpDeposit));
    try {
      const res = await topUp(payload, token);
      if (res.success) {
        return dispatch(successState(topUpDeposit, res.data, payload));
      }
      return dispatch(failedState(topUpDeposit, res.message, payload));
    } catch (err) {
      return dispatch(failedState(topUpDeposit, err.message, payload));
    }
  };
};
// ====================== FLIGHTS - ORDER HISTORY ======================

// ====================== FLIGHTS - SEARCH ======================
export const actionWithdraw = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(withdraw));
    try {
      const res = await withdrawRequest(payload, token);
      if (res.status) {
        return dispatch(successState(withdraw, res.data, payload));
      }
      return dispatch(failedState(withdraw, res.message, payload));
    } catch (err) {
      return dispatch(failedState(withdraw, err.message, payload));
    }
  };
};
// ====================== FLIGHTS - SEARCH ======================
