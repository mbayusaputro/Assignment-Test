import {
  Action,
  State,
  FLIGHTORDERHISTORY,
  FLIGHTORDERHISTORY_SUCCESS,
  FLIGHTORDERHISTORY_FAILED,
  GET_FLIGHT,
  GET_FLIGHT_FAILED,
  GET_FLIGHT_SUCCESS,
  BOOKING_FLIGHT,
  BOOKING_FLIGHT_FAILED,
  BOOKING_FLIGHT_SUCCESS,
} from './types';

const initialState: State = {
  // Flights - Order History
  fetchFlightsOrderHistory: false,
  flightsOrderHistory: {
    data: null,
    meta: null,
  },
  // Flights - Search
  fetchResult: false,
  // Flights - Booking
  fetchBooking: false,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // ====================== FLIGHTS - ORDER HISTORY ======================
    case FLIGHTORDERHISTORY:
      return {
        ...state,
        fetchFlightsOrderHistory: true,
      };

    case FLIGHTORDERHISTORY_SUCCESS:
      return {
        ...state,
        fetchFlightsOrderHistory: false,
        flightsOrderHistory: {
          data: action.data.data,
          meta: action.data.meta,
        },
      };

    case FLIGHTORDERHISTORY_FAILED:
      return {
        ...state,
        fetchFlightsOrderHistory: false,
      };
    // ====================== FLIGHTS - ORDER HISTORY ======================

    // ====================== FLIGHTS - SEARCH ======================
    case GET_FLIGHT:
      return {
        ...state,
        fetchResult: true,
      };

    case GET_FLIGHT_SUCCESS:
      return {
        ...state,
        fetchResult: false,
      };

    case GET_FLIGHT_FAILED:
      return {
        ...state,
        fetchResult: false,
      };
    // ====================== FLIGHTS - SEARCH ======================

    // ====================== FLIGHTS - BOOKING ======================
    case BOOKING_FLIGHT:
      return {
        ...state,
        fetchBooking: true,
      };

    case BOOKING_FLIGHT_SUCCESS:
      return {
        ...state,
        fetchBooking: false,
      };

    case BOOKING_FLIGHT_FAILED:
      return {
        ...state,
        fetchBooking: false,
      };
    // ====================== FLIGHTS - BOOKING ======================
    default:
      return state;
  }
};
