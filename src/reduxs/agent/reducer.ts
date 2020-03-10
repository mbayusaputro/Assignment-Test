import {
  Action,
  State,
  TOP_UP,
  TOP_UP_SUCCESS,
  TOP_UP_FAILED,
  WITHDRAW,
  WITHDRAW_SUCCESS,
  WITHDRAW_FAILED,
} from './types';

const initialState: State = {
  // Flights - Top Up Deposit
  fetchTopUp: false,
  // Flights - Withdraw Request
  fetchWithdraw: false,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // ====================== FLIGHTS - ORDER HISTORY ======================
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
    // ====================== FLIGHTS - ORDER HISTORY ======================

    // ====================== FLIGHTS - SEARCH ======================
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
    // ====================== FLIGHTS - SEARCH ======================

    default:
      return state;
  }
};
