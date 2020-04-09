export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchTopUp: boolean;
  fetchWithdraw: boolean;
  fetchAllPack: boolean;
  fetchReport: boolean;
}

// ====================== AGENT - TOP UP ======================
export const TOP_UP = 'TOP_UP';
export const TOP_UP_SUCCESS = 'TOP_UP_SUCCESS';
export const TOP_UP_FAILED = 'TOP_UP_FAILED';
// ====================== AGENT - TOP UP ======================

// ====================== AGENT - WITHDRAW ======================
export const WITHDRAW = 'WITHDRAW';
export const WITHDRAW_SUCCESS = 'WITHDRAW_SUCCESS';
export const WITHDRAW_FAILED = 'WITHDRAW_FAILED';
// ====================== AGENT - WITHDRAW ======================

// ====================== AGENT - ALL PACKAGE ======================
export const ALLPACK = 'ALLPACK';
export const ALLPACK_SUCCESS = 'ALLPACK_SUCCESS';
export const ALLPACK_FAILED = 'ALLPACK_FAILED';
// ====================== AGENT - ALL PACKAGE ======================

// ====================== AGENT - REPORT ======================
export const REPORT = 'REPORT';
export const REPORT_SUCCESS = 'REPORT_SUCCESS';
export const REPORT_FAILED = 'REPORT_FAILED';
// ====================== AGENT - REPORT ======================
