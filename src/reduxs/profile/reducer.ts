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
  CHANGEPASSWORDUSER,
  CHANGEPASSWORDUSER_SUCCESS,
  CHANGEPASSWORDUSER_FAILED,
  FORGOTPASS,
  FORGOTPASS_SUCCESS,
  FORGOTPASS_FAILED,
  FORGOTPASS2,
  FORGOTPASS2_SUCCESS,
  FORGOTPASS2_FAILED,
  FORGOTPASS3,
  FORGOTPASS3_SUCCESS,
  FORGOTPASS3_FAILED,
} from './types';

const intialState: State = {
  // SignIn
  isLogin: false,
  token: '',
  fetchSignIn: false,

  // Get Profile after SignIn
  profile: null,
  fetchProfile: false,

  // SignUp
  fetchSignUp: false,
  payloadSignUp1: {},
  payloadSignUp2: {},
  payloadSignUp3: {},

  // Update Profile
  fetchUpdateProfile: false,

  // Change Password via User
  fetchChangePasswordUser: false,

  // Forgot Password
  fetchForgotPass: false,
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
        profile: null,
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

    // ============= CHANGE PASSWORD VIA USER =============
    case CHANGEPASSWORDUSER:
      return {
        ...state,
        fetchChangePasswordUser: true,
      };

    case CHANGEPASSWORDUSER_SUCCESS:
      return {
        ...state,
        fetchChangePasswordUser: false,
      };

    case CHANGEPASSWORDUSER_FAILED:
      return {
        ...state,
        fetchChangePasswordUser: false,
      };

    // ============= FORGOT PASSWORD step 1 =============
    case FORGOTPASS:
      return {
        ...state,
        fetchForgotPass: true,
      };

    case FORGOTPASS_SUCCESS:
      return {
        ...state,
        fetchForgotPass: false,
      };

    case FORGOTPASS_FAILED:
      return {
        ...state,
        fetchForgotPass: false,
      };

    // ============= FORGOT PASSWORD step 2 =============
    case FORGOTPASS2:
      return {
        ...state,
        fetchForgotPass: true,
      };

    case FORGOTPASS2_SUCCESS:
      return {
        ...state,
        fetchForgotPass: false,
      };

    case FORGOTPASS2_FAILED:
      return {
        ...state,
        fetchForgotPass: false,
      };

    // ============= FORGOT PASSWORD step 1 =============
    case FORGOTPASS3:
      return {
        ...state,
        fetchForgotPass: true,
      };

    case FORGOTPASS3_SUCCESS:
      return {
        ...state,
        fetchForgotPass: false,
      };

    case FORGOTPASS3_FAILED:
      return {
        ...state,
        fetchForgotPass: false,
      };

    default:
      return state;
  }
};
