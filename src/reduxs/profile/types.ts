export interface Action {
  type: string;
  data: any;
  payload: object;
}

export interface State {
  isLogin: boolean;
  token: string;
  fetchSignIn: boolean;
  profile: any;
  fetchProfile: boolean;
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
