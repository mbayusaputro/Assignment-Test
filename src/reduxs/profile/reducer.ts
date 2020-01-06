import {Action, State, SET_LOGIN} from './types';

const intialState: State = {
  isLogin: false,
};

export default (state: State = intialState, action: Action): State => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: action.data,
      };

    default:
      return state;
  }
};
