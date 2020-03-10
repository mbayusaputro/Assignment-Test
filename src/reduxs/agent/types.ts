export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchTopUp: boolean;
  fetchWithdraw: boolean;
}

// ====================== FLIGHTS - TOP UP ======================
export const TOP_UP = 'TOP_UP';
export const TOP_UP_SUCCESS = 'TOP_UP_SUCCESS';
export const TOP_UP_FAILED = 'TOP_UP_FAILED';
// ====================== FLIGHTS - TOP UP ======================

// ====================== FLIGHTS - WITHDRAW ======================
export const WITHDRAW = 'WITHDRAW';
export const WITHDRAW_SUCCESS = 'WITHDRAW_SUCCESS';
export const WITHDRAW_FAILED = 'WITHDRAW_FAILED';
// ====================== FLIGHTS - WITHDRAW ======================
