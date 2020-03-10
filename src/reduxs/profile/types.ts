export interface Action {
  type: string;
  data: any;
  payload: object;
}

export interface State {
  isLogin: boolean;
  token: string;

  // Sign In & Get Profile
  fetchSignIn: boolean;
  profile: any;
  fetchProfile: boolean;

  // Sign Up
  fetchSignUp: boolean;
  payloadSignUp1: any;
  payloadSignUp2: any;
  payloadSignUp3: any;

  // Update Profile
  fetchUpdateProfile: boolean;

  // Change Password via User
  fetchChangePasswordUser: boolean;

  // Forgot Password
  fetchForgotPass: boolean;
}

export const SET_LOGIN = 'SET_LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const LOGOUT = 'LOGOUT';

export const SIGNIN = 'SIGNIN';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILED = 'SIGNIN_FAILED';

export const GETPROFILE = 'GETPROFILE';
export const GETPROFILE_SUCCESS = 'GETPROFILE_SUCCESS';
export const GETPROFILE_FAILED = 'GETPROFILE_FAILED';

export const REGISTER1 = 'REGISTER1';
export const REGISTER1_SUCCESS = 'REGISTER1_SUCCESS';
export const REGISTER1_FAILED = 'REGISTER1_FAILED';

export const REGISTER2 = 'REGISTER2';
export const REGISTER2_SUCCESS = 'REGISTER2_SUCCESS';
export const REGISTER2_FAILED = 'REGISTER1_FAILED';

export const REGISTER3 = 'REGISTER3';
export const REGISTER3_SUCCESS = 'REGISTER3_SUCCESS';
export const REGISTER3_FAILED = 'REGISTER3_FAILED';

export const UPDATEPROFILE = 'UPDATEPROFILE';
export const UPDATEPROFILE_SUCCESS = 'UPDATEPROFILE_SUCCESS';
export const UPDATEPROFILE_FAILED = 'UPDATEPROFILE_FAILED';

export const CHANGEPASSWORDUSER = 'CHANGEPASSWORDUSER';
export const CHANGEPASSWORDUSER_SUCCESS = 'CHANGEPASSWORDUSER_SUCCESS';
export const CHANGEPASSWORDUSER_FAILED = 'CHANGEPASSWORDUSER_FAILED';

export const FORGOTPASS = 'FORGOTPASS';
export const FORGOTPASS_SUCCESS = 'FORGOTPASS_SUCCESS';
export const FORGOTPASS_FAILED = 'FORGOTPASS_FAILED';
