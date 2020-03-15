import {Dispatch} from 'redux';
import {
  listDestinationHotel,
  searchHotel,
  bookingHotel,
} from '../../services/api';
import {
  LIST_DESTINATION,
  LIST_DESTINATION_SUCCESS,
  LIST_DESTINATION_FAILED,
  SEARCH_HOTEL,
  SEARCH_HOTEL_SUCCESS,
  SEARCH_HOTEL_FAILED,
  BOOK_HOTEL,
  BOOK_HOTEL_SUCCESS,
  BOOK_HOTEL_FAILED,
} from './types';

const listDest = 'listDest';
const searchHot = 'searchHot';
const bookHot = 'bookHot';

const requestState = (type: string) => {
  if (type === listDest) {
    return {
      type: LIST_DESTINATION,
    };
  } else if (type === searchHot) {
    return {
      type: SEARCH_HOTEL,
    };
  } else if (type === bookHot) {
    return {
      type: BOOK_HOTEL,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === listDest) {
    return {
      type: LIST_DESTINATION_SUCCESS,
      data,
      payload,
    };
  } else if (type === searchHot) {
    return {
      type: SEARCH_HOTEL_SUCCESS,
      data,
      payload,
    };
  } else if (type === bookHot) {
    return {
      type: BOOK_HOTEL_SUCCESS,
      data,
      payload,
    };
  }
};

const failedState = (type: string, message: any, payload?: any) => {
  if (type === listDest) {
    return {
      type: LIST_DESTINATION_FAILED,
      message,
      payload,
    };
  } else if (type === searchHot) {
    return {
      type: SEARCH_HOTEL_FAILED,
      message,
      payload,
    };
  } else if (type === bookHot) {
    return {
      type: BOOK_HOTEL_FAILED,
      message,
      payload,
    };
  }
};

// SEARCH LIST DESTINATION HOTEL
export const actionListDestinationHotel = (payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(listDest));
    try {
      const res = await listDestinationHotel(payload);
      if (res.status) {
        const dataObj = {
          hotels: res.hotels,
          city: res.city,
        };
        return dispatch(successState(listDest, dataObj, payload));
      }
      return dispatch(failedState(listDest, res.message, payload));
    } catch (err) {
      return dispatch(failedState(listDest, err.message, payload));
    }
  };
};

// SEARCH HOTEL
export const actionSearchHotel = (payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(searchHot));
    try {
      const res = await searchHotel(payload);
      if (res.status) {
        return dispatch(successState(searchHot, res, payload));
      }
      return dispatch(failedState(searchHot, res.message, payload));
    } catch (err) {
      return dispatch(failedState(searchHot, err.message, payload));
    }
  };
};

// BOOK HOTEL
export const actionBookHotel = (payload: object, token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(bookHot));
    try {
      const res = await bookingHotel(payload, token);
      if (res.status) {
        return dispatch(successState(bookHot, res.data, payload));
      }
      return dispatch(failedState(bookHot, res.message, payload));
    } catch (err) {
      return dispatch(failedState(bookHot, err.message, payload));
    }
  };
};
