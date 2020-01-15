import {Action, State, COUNTRY, COUNTRY_FAILED, COUNTRY_SUCCESS} from './types';

const initialState: State = {
  fetchCountry: false,
  country: new Array(0),
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case COUNTRY:
      return {
        ...state,
        fetchCountry: true,
      };
    case COUNTRY_SUCCESS:
      return {
        ...state,
        fetchCountry: false,
        country: action.data,
      };
    case COUNTRY_FAILED:
      return {
        ...state,
        fetchCountry: false,
      };

    default:
      return state;
  }
};
