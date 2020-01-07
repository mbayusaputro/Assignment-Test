import {Dispatch} from 'redux';
import {
  SET_LOGIN,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_TOKEN,
  LOGOUT,
  GETPROFILE,
  GETPROFILE_SUCCESS,
  GETPROFILE_FAILED,
} from './types';
import {signIn, getProfile} from '../../services/api';

export const setLogin = (data: any) => ({
  type: SET_LOGIN,
  data,
});

export const setToken = (data: any) => ({
  type: SET_TOKEN,
  data,
});

export const logout = () => ({
  type: LOGOUT,
});

export const actionSignIn = (payloadSignIn: object) => {
  const requestSignIn = () => ({
    type: SIGNIN,
  });

  const successSignIn = (data: any, payload: object) => ({
    type: SIGNIN_SUCCESS,
    data,
    payload,
  });

  const failedSignIn = (message: any, payload: object) => ({
    type: SIGNIN_FAILED,
    message,
    payload,
  });

  return async (dispatch: Dispatch) => {
    dispatch(requestSignIn());
    try {
      const res = await signIn(payloadSignIn);
      if (res.success) {
        return dispatch(successSignIn(res.data, payloadSignIn));
      }
      return dispatch(failedSignIn(res.message, payloadSignIn));
    } catch (err) {
      return dispatch(failedSignIn(err.message, payloadSignIn));
    }
  };
};

export const actionGetProfile = (token: string) => {
  const request = () => ({
    type: GETPROFILE,
  });
  const success = (data: any, payload: string) => ({
    type: GETPROFILE_SUCCESS,
    data,
    payload,
  });
  const failed = (message: any, payload: string) => ({
    type: GETPROFILE_FAILED,
    message,
    payload,
  });

  return async (dispatch: Dispatch) => {
    dispatch(request());
    try {
      const res = await getProfile(token);
      if (res.success) {
        return dispatch(success(res.data, token));
      }
      return dispatch(failed(res.message, token));
    } catch (err) {
      return dispatch(failed(err.message, token));
    }
  };
};
