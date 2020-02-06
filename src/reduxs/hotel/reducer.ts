import {
  Action,
  State,
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

const initialState: State = {
  // List Destination Hotel
  fetchDestination: false,

  // Search Hotel
  fetchSearch: false,
  pathAsset: '',

  // Book Hotel
  fetchBookHotel: false,
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // ====================== HOTEL - LIST DESTIONATION HOTEL ======================
    case LIST_DESTINATION:
      return {
        ...state,
        fetchDestination: true,
      };
    case LIST_DESTINATION_SUCCESS:
      return {
        ...state,
        fetchDestination: false,
      };
    case LIST_DESTINATION_FAILED:
      return {
        ...state,
        fetchDestination: false,
      };

    // ====================== HOTEL - SEARCH HOTEL ======================
    case SEARCH_HOTEL:
      return {
        ...state,
        fetchSearch: true,
      };
    case SEARCH_HOTEL_SUCCESS:
      return {
        ...state,
        fetchSearch: false,
        pathAsset: action.data.pathAsset,
      };
    case SEARCH_HOTEL_FAILED:
      return {
        ...state,
        fetchSearch: false,
      };

    // ====================== HOTEL - BOOK HOTEL ======================
    case BOOK_HOTEL:
      return {
        ...state,
        fetchBookHotel: true,
      };
    case BOOK_HOTEL_SUCCESS:
      return {
        ...state,
        fetchBookHotel: false,
      };
    case BOOK_HOTEL_FAILED:
      return {
        ...state,
        fetchBookHotel: false,
      };

    default:
      return state;
  }
};
