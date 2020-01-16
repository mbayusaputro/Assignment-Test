import {
  Action,
  State,
  SET_LOGIN,
  SET_TOKEN,
  LOGOUT,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  GETPROFILE,
  GETPROFILE_SUCCESS,
  GETPROFILE_FAILED,
  REGISTER1,
  REGISTER1_SUCCESS,
  REGISTER1_FAILED,
  REGISTER2,
  REGISTER2_SUCCESS,
  REGISTER2_FAILED,
  REGISTER3,
  REGISTER3_SUCCESS,
  REGISTER3_FAILED,
  UPDATEPROFILE,
  UPDATEPROFILE_SUCCESS,
  UPDATEPROFILE_FAILED,
} from './types';

const intialState: State = {
  isLogin: false,
  token: '',
  fetchSignIn: false,

  // Get Profile after SignIn
  profile: {},
  fetchProfile: false,

  // SignUp
  fetchSignUp: false,
  payloadSignUp1: {},
  payloadSignUp2: {},
  payloadSignUp3: {},

  // Update Profile
  fetchUpdateProfile: false,
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
        profile: {},
      };

    // ============= SIGNIN =============
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

    // ============= GET PROFILE =============
    case GETPROFILE:
      return {
        ...state,
        fetchProfile: true,
      };

    case GETPROFILE_SUCCESS:
      return {
        ...state,
        fetchProfile: false,
        profile: action.data,
      };

    case GETPROFILE_FAILED:
      return {
        ...state,
        fetchProfile: false,
      };

    // ============= SIGNUP 1 {Apply} =============
    case REGISTER1:
      return {
        ...state,
        fetchSignUp: true,
      };

    case REGISTER1_SUCCESS:
      return {
        ...state,
        fetchSignUp: false,
        payloadSignUp1: action.payload,
      };

    case REGISTER1_FAILED:
      return {
        ...state,
        fetchSignUp: false,
      };

    // ============= SIGNUP 2 {Verify OTP} =============
    case REGISTER2:
      return {
        ...state,
        fetchSignUp: true,
      };

    case REGISTER2_SUCCESS:
      return {
        ...state,
        fetchSignUp: false,
        payloadSignUp2: action.payload,
      };

    case REGISTER2_FAILED:
      return {
        ...state,
        fetchSignUp: false,
      };

    // ============= SIGNUP 3 {Submit Last Step} =============
    case REGISTER3:
      return {
        ...state,
        fetchSignUp: true,
      };

    case REGISTER3_SUCCESS:
      return {
        ...state,
        fetchSignUp: false,
        payloadSignUp3: action.payload,
      };

    case REGISTER3_FAILED:
      return {
        ...state,
        fetchSignUp: false,
      };

    // ============= UPDATE PROFILE =============
    case UPDATEPROFILE:
      return {
        ...state,
        fetchUpdateProfile: true,
      };

    case UPDATEPROFILE_SUCCESS:
      return {
        ...state,
        fetchUpdateProfile: false,
        profile: action.data,
      };

    case UPDATEPROFILE_FAILED:
      return {
        ...state,
        fetchUpdateProfile: false,
      };

    default:
      return state;
  }
};
