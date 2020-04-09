import {Dispatch} from 'redux';
import {
  TOP_UP,
  TOP_UP_FAILED,
  TOP_UP_SUCCESS,
  WITHDRAW,
  WITHDRAW_FAILED,
  WITHDRAW_SUCCESS,
  ALLPACK,
  ALLPACK_FAILED,
  ALLPACK_SUCCESS,
  REPORT,
  REPORT_FAILED,
  REPORT_SUCCESS,
} from './types';
import {topUp, withdrawRequest, allPack, reportAgent} from '../../services/api';

const topUpDeposit: string = 'topUpDeposit';
const withdraw: string = 'withdraw';
const allpack: string = 'allpack';
const report: string = 'report';

const requestState = (type: string) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW,
    };
  } else if (type === allpack) {
    return {
      type: ALLPACK,
    };
  } else if (type === report) {
    return {
      type: REPORT,
    };
  }
};

const successState = (type: string, data: any, meta?: any) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP_SUCCESS,
      data,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW_SUCCESS,
      data,
    };
  } else if (type === allpack) {
    return {
      type: ALLPACK_SUCCESS,
      data,
    };
  } else if (type === report) {
    return {
      type: REPORT_SUCCESS,
      data,
      meta,
    };
  }
};

const failedState = (type: string, message: any) => {
  if (type === topUpDeposit) {
    return {
      type: TOP_UP_FAILED,
      message,
    };
  } else if (type === withdraw) {
    return {
      type: WITHDRAW_FAILED,
      message,
    };
  } else if (type === allpack) {
    return {
      type: ALLPACK_FAILED,
      message,
    };
  } else if (type === report) {
    return {
      type: REPORT_FAILED,
      message,
    };
  }
};

// ====================== AGENT - TOP UP ======================
export const actionTopUp = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(topUpDeposit));
    try {
      const res = await topUp(payload, token);
      if (res.success) {
        return dispatch(successState(topUpDeposit, res.data));
      }
      return dispatch(failedState(topUpDeposit, res.message));
    } catch (err) {
      return dispatch(failedState(topUpDeposit, err.message));
    }
  };
};
// ====================== AGENT - TOP UP ======================

// ====================== AGENT - WITHDRAW ======================
export const actionWithdraw = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(withdraw));
    try {
      const res = await withdrawRequest(payload, token);
      if (res.status) {
        return dispatch(successState(withdraw, res.data));
      }
      return dispatch(failedState(withdraw, res.message));
    } catch (err) {
      return dispatch(failedState(withdraw, err.message));
    }
  };
};
// ====================== AGENT - WITHDRAW ======================

// ====================== AGENT - ALL PACKAGE ======================
export const actionAllPack = (token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(allpack));
    try {
      const res = await allPack(token);
      if (res.success) {
        return dispatch(successState(allpack, res.data));
      }
      return dispatch(failedState(allpack, res.data.message));
    } catch (err) {
      return dispatch(failedState(allpack, err.message));
    }
  };
};
// ====================== AGENT - ALL PACKAGE ======================

// ====================== AGENT - TOP UP ======================
export const actionReport = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(report));
    try {
      const res = await reportAgent(token, payload);
      if (res.success) {
        return dispatch(successState(report, res.data, res.meta));
      }
      return dispatch(failedState(report, res.message));
    } catch (err) {
      return dispatch(failedState(report, err.message));
    }
  };
};
// ====================== AGENT - TOP UP ======================
