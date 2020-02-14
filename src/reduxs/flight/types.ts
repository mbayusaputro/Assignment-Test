export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchFlightsOrderHistory: boolean;
  fetchResult: boolean;
  fetchBooking: boolean;
}

// ====================== FLIGHTS - ORDER HISTORY ======================
export const FLIGHTORDERHISTORY = 'FLIGHTORDERHISTORY';
export const FLIGHTORDERHISTORY_SUCCESS = 'FLIGHTORDERHISTORY_SUCCESS';
export const FLIGHTORDERHISTORY_FAILED = 'FLIGHTORDERHISTORY_FAILED';
// ====================== FLIGHTS - ORDER HISTORY ======================

// ====================== FLIGHTS - SEARCH ======================
export const GET_FLIGHT = 'GET_FLIGHT';
export const GET_FLIGHT_SUCCESS = 'GET_FLIGHT_SUCCESS';
export const GET_FLIGHT_FAILED = 'GET_FLIGHT_FAILED';
// ====================== FLIGHTS - SEARCH ======================

// ====================== FLIGHTS - BOOKING ======================
export const BOOKING_FLIGHT = 'BOOKING_FLIGHT';
export const BOOKING_FLIGHT_SUCCESS = 'BOOKING_FLIGHT_SUCCESS';
export const BOOKING_FLIGHT_FAILED = 'BOOKING_FLIGHT_FAILED';
// ====================== FLIGHTS - BOOKING ======================
