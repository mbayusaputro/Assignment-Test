import {
  Action,
  State,
  SET_LOGIN,
  SET_TOKEN,
  LOGOUT,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
} from './types';

const intialState: State = {
  isLogin: false,
  token: '',
  fetchSignIn: false,
};

export default (state: State = intialState, action: Action): State => {
  switch (action.type) {
    case SET_LOGIN:
      return {
        ...state,
        isLogin: action.data,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.data,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: '',
      };

    // SignIn
    case SIGNIN:
      return {
        ...state,
        fetchSignIn: true,
      };

    case SIGNIN_SUCCESS:
      return {
        ...state,
        fetchSignIn: false,
        isLogin: true,
      };

    case SIGNIN_FAILED:
      return {
        ...state,
        fetchSignIn: false,
      };

    default:
      return state;
  }
};
