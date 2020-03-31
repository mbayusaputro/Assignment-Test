import {
  Action,
  State,
  TOP_UP,
  TOP_UP_SUCCESS,
  TOP_UP_FAILED,
  WITHDRAW,
  WITHDRAW_SUCCESS,
  WITHDRAW_FAILED,
  ALLPACK,
  ALLPACK_FAILED,
  ALLPACK_SUCCESS,
} from './types';

const initialState: State = {
  // Agent - Top Up Deposit
  fetchTopUp: false,
  // Agent - Withdraw Request
  fetchWithdraw: false,
  // Agent - All Package
  fetchAllPack: false,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // ====================== AGENT - TOP UP ======================
    case TOP_UP:
      return {
        ...state,
        fetchTopUp: true,
      };

    case TOP_UP_SUCCESS:
      return {
        ...state,
        fetchTopUp: false,
      };

    case TOP_UP_FAILED:
      return {
        ...state,
        fetchTopUp: false,
      };
    // ====================== AGENT - TOP UP ======================

    // ====================== AGENT - WITHDRAW ======================
    case WITHDRAW:
      return {
        ...state,
        fetchWithdraw: true,
      };

    case WITHDRAW_SUCCESS:
      return {
        ...state,
        fetchWithdraw: false,
      };

    case WITHDRAW_FAILED:
      return {
        ...state,
        fetchWithdraw: false,
      };
    // ====================== AGENT - WITHDRAW ======================

    // ====================== AGENT - ALL PACKAGE ======================
    case ALLPACK:
      return {
        ...state,
        fetchAllPack: true,
      };

    case ALLPACK_SUCCESS:
      return {
        ...state,
        fetchAllPack: false,
      };

    case ALLPACK_FAILED:
      return {
        ...state,
        fetchAllPack: false,
      };
    // ====================== AGENT - ALL PACKAGE ======================

    default:
      return state;
  }
};
