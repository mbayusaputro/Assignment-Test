export interface Action {
  type: string;
  data: any;
  payload: any;
}

export interface State {
  fetchDestination: boolean;
  fetchSearch: boolean;
  pathAsset: string;
}

// List Hotel Destination
export const LIST_DESTINATION = 'LIST_DESTINATION';
export const LIST_DESTINATION_SUCCESS = 'LIST_DESTINATION_SUCCESS';
export const LIST_DESTINATION_FAILED = 'LIST_DESTINATION_FAILED';

// Search Hotel
export const SEARCH_HOTEL = 'SEARCH_HOTEL';
export const SEARCH_HOTEL_SUCCESS = 'SEARCH_HOTEL_SUCCESS';
export const SEARCH_HOTEL_FAILED = 'SEARCH_HOTEL_FAILED';
