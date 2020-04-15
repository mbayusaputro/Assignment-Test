import {Action, State, BASKET, DELETE} from './types';

const initialState: State = {
  data: [],
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    // ====================== BASKET ======================
    case BASKET:
      return {
        ...state,
        data: state.data.concat(action.data),
      };
    case DELETE:
      return {
        ...state,
        data: action.data,
      };
    // ====================== BASKET ======================

    default:
      return state;
  }
};
