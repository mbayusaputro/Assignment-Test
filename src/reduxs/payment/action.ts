import {Dispatch} from 'redux';
import {
  PAYMIDTRANS,
  PAYMIDTRANS_SUCCESS,
  PAYMIDTRANS_FAILED,
  CHECK_PAYMENT,
  CHECK_PAYMENT_SUCCESS,
  CHECK_PAYMENT_FAILED,
  CHECK_TOPUP,
  CHECK_TOPUP_FAILED,
  CHECK_TOPUP_SUCCESS,
} from './types';
import {
  paymentMidtrans,
  checkPaymentMidtrans,
  checkTopUp,
} from '../../services/api';

const payMidtrans = 'payMidtrans';
const checkMidtrans = 'checkMidtrans';
const topUp = 'topUp';

const requestState = (type: string) => {
  if (type === payMidtrans) {
    return {
      type: PAYMIDTRANS,
    };
  } else if (type === checkMidtrans) {
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
  if (type === payMidtrans) {
    return {
      type: PAYMIDTRANS_SUCCESS,
      data,
      payload,
    };
  } else if (type === checkMidtrans) {
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
  if (type === payMidtrans) {
    return {
      type: PAYMIDTRANS_FAILED,
      message,
      payload,
    };
  } else if (type === checkMidtrans) {
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

export const actionPaymentMidtrans = (payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(payMidtrans));
    try {
      const res = await paymentMidtrans(payload);
      if (res.success) {
        return dispatch(successState(payMidtrans, res.data, payload));
      }
      return dispatch(failedState(payMidtrans, res.message, payload));
    } catch (err) {
      return dispatch(failedState(payMidtrans, err.message, payload));
    }
  };
};

export const actionCheckPaymentMidtrans = (trx_id: string, type: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(checkMidtrans));
    try {
      const res = await checkPaymentMidtrans(trx_id, type);
      if (res.success) {
        return dispatch(successState(checkMidtrans, res.data, trx_id));
      }
      return dispatch(failedState(checkMidtrans, res.message, trx_id));
    } catch (err) {
      return dispatch(failedState(checkMidtrans, err.message, trx_id));
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
