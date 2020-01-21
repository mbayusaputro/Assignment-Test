export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchFlightsOrderHistory: boolean;
  flightsOrderHistory: any;
}

// ====================== FLIGHTS - ORDER HISTORY ======================
export const FLIGHTORDERHISTORY = 'FLIGHTORDERHISTORY';
export const FLIGHTORDERHISTORY_SUCCESS = 'FLIGHTORDERHISTORY_SUCCESS';
export const FLIGHTORDERHISTORY_FAILED = 'FLIGHTORDERHISTORY_FAILED';
// ====================== FLIGHTS - ORDER HISTORY ======================
