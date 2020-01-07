import {Dispatch} from 'redux';
import {
  SET_LOGIN,
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_FAILED,
  SET_TOKEN,
  LOGOUT,
} from './types';
import {signIn} from '../../services/api';

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
