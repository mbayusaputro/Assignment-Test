import {Dispatch} from 'redux';
import {
  PAYMENT,
  PAYMENT_SUCCESS,
  PAYMENT_FAILED,
  CHECK_PAYMENT,
  CHECK_PAYMENT_SUCCESS,
  CHECK_PAYMENT_FAILED,
  CHECK_TOPUP,
  CHECK_TOPUP_FAILED,
  CHECK_TOPUP_SUCCESS,
} from './types';
import {
  paymentGlobal,
  checkPaymentGlobal,
  checkTopUp,
} from '../../services/api';

const payment = 'payment';
const checkPayment = 'checkPayment';
const topUp = 'topUp';

const requestState = (type: string) => {
  if (type === payment) {
    return {
      type: PAYMENT,
    };
  } else if (type === checkPayment) {
    return {
      type: CHECK_PAYMENT,
    };
  } else if (type === topUp) {
    return {
      type: CHECK_TOPUP,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === payment) {
    return {
      type: PAYMENT_SUCCESS,
      data,
      payload,
    };
  } else if (type === checkPayment) {
    return {
      type: CHECK_PAYMENT_SUCCESS,
      data,
      payload,
    };
  } else if (type === topUp) {
    return {
      type: CHECK_TOPUP_SUCCESS,
      data,
      payload,
    };
  }
};

const failedState = (type: string, message: any, payload?: any) => {
  if (type === payment) {
    return {
      type: PAYMENT_FAILED,
      message,
      payload,
    };
  } else if (type === checkPayment) {
    return {
      type: CHECK_PAYMENT_FAILED,
      message,
      payload,
    };
  } else if (type === topUp) {
    return {
      type: CHECK_TOPUP_FAILED,
      message,
      payload,
    };
  }
};

export const actionPayment = (payload: object, token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(payment));
    try {
      const res = await paymentGlobal(payload, token);
      if (res.success) {
        return dispatch(successState(payment, res.data, payload));
      }
      return dispatch(failedState(payment, res.message, payload));
    } catch (err) {
      return dispatch(failedState(payment, err.message, payload));
    }
  };
};

export const actionCheckPayment = (trx_id: string, type: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(checkPayment));
    try {
      const res = await checkPaymentGlobal(trx_id, type);
      if (res.success) {
        return dispatch(successState(checkPayment, res.data, trx_id));
      }
      return dispatch(failedState(checkPayment, res.message, trx_id));
    } catch (err) {
      return dispatch(failedState(checkPayment, err.message, trx_id));
    }
  };
};

export const actionCheckTopUp = (trx_id: string, token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(topUp));
    try {
      const res = await checkTopUp(trx_id, token);
      if (res.success) {
        return dispatch(successState(topUp, res.data, trx_id));
      }
      return dispatch(failedState(topUp, res.message, trx_id));
    } catch (err) {
      return dispatch(failedState(topUp, err.message, trx_id));
    }
  };
};
