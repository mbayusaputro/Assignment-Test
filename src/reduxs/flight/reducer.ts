import {
  Action,
  State,
  FLIGHTORDERHISTORY,
  FLIGHTORDERHISTORY_SUCCESS,
  FLIGHTORDERHISTORY_FAILED,
} from './types';

const initialState: State = {
  // Flights - Order History
  fetchFlightsOrderHistory: false,
  flightsOrderHistory: {
    data: null,
    meta: null,
  },
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

    default:
      return state;
  }
};
