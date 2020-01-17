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
  REGISTER1,
  REGISTER1_SUCCESS,
  REGISTER1_FAILED,
  REGISTER2,
  REGISTER3,
  REGISTER2_SUCCESS,
  REGISTER3_SUCCESS,
  REGISTER2_FAILED,
  REGISTER3_FAILED,
  UPDATEPROFILE,
  UPDATEPROFILE_SUCCESS,
  UPDATEPROFILE_FAILED,
  CHANGEPASSWORDUSER,
  CHANGEPASSWORDUSER_SUCCESS,
  CHANGEPASSWORDUSER_FAILED,
} from './types';
import {
  signIn,
  profile,
  signUp,
  signUpLast,
  updateProfile,
  changePasswordUser,
} from '../../services/api';

const signInType = 'signInType';
const getProfileType = 'getProfileType';
const signUp1 = 'signUp1';
const signUp2 = 'signUpp2';
const signUp3 = 'signUpp3';
const updateProfileType = 'updateProfileType';
const changePassUserType = 'changePassUserType';

const requestState = (type: string) => {
  if (type === signInType) {
    return {
      type: SIGNIN,
    };
  } else if (type === getProfileType) {
    return {
      type: GETPROFILE,
    };
  } else if (type === signUp1) {
    return {
      type: REGISTER1,
    };
  } else if (type === signUp2) {
    return {
      type: REGISTER2,
    };
  } else if (type === signUp3) {
    return {
      type: REGISTER3,
    };
  } else if (type === updateProfileType) {
    return {
      type: UPDATEPROFILE,
    };
  } else if (type === changePassUserType) {
    return {
      type: CHANGEPASSWORDUSER,
    };
  }
};

const successState = (type: string, data: any, payload: any) => {
  if (type === signInType) {
    return {
      type: SIGNIN_SUCCESS,
      data,
      payload,
    };
  } else if (type === getProfileType) {
    return {
      type: GETPROFILE_SUCCESS,
      data,
      payload,
    };
  } else if (type === signUp1) {
    return {
      type: REGISTER1_SUCCESS,
      data,
      payload,
    };
  } else if (type === signUp2) {
    return {
      type: REGISTER2_SUCCESS,
      data,
      payload,
    };
  } else if (type === signUp3) {
    return {
      type: REGISTER3_SUCCESS,
      data,
      payload,
    };
  } else if (type === updateProfileType) {
    return {
      type: UPDATEPROFILE_SUCCESS,
      data,
      payload,
    };
  } else if (type === changePassUserType) {
    return {
      type: CHANGEPASSWORDUSER_SUCCESS,
      data,
      payload,
    };
  }
};

const failedState = (type: string, message: any, payload: any) => {
  if (type === signInType) {
    return {
      type: SIGNIN_FAILED,
      message,
      payload,
    };
  } else if (type === getProfileType) {
    return {
      type: GETPROFILE_FAILED,
      message,
      payload,
    };
  } else if (type === signUp1) {
    return {
      type: REGISTER1_FAILED,
      message,
      payload,
    };
  } else if (type === signUp2) {
    return {
      type: REGISTER2_FAILED,
      message,
      payload,
    };
  } else if (type === signUp3) {
    return {
      type: REGISTER3_FAILED,
      message,
      payload,
    };
  } else if (type === updateProfileType) {
    return {
      type: UPDATEPROFILE_FAILED,
      message,
      payload,
    };
  } else if (type === changePassUserType) {
    return {
      type: CHANGEPASSWORDUSER_FAILED,
      message,
      payload,
    };
  }
};

export const actionSignIn = (payloadSignIn: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(signInType));
    try {
      const res = await signIn(payloadSignIn);
      if (res.success) {
        return dispatch(successState(signInType, res.data, payloadSignIn));
      }
      return dispatch(failedState(signInType, res.message, payloadSignIn));
    } catch (err) {
      return dispatch(failedState(signInType, err.message, payloadSignIn));
    }
  };
};

export const actionGetProfile = (token: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(getProfileType));
    try {
      const res = await profile(token);
      if (res.success) {
        return dispatch(successState(getProfileType, res.data, token));
      }
      return dispatch(failedState(getProfileType, res.message, token));
    } catch (err) {
      return dispatch(failedState(getProfileType, err.message, token));
    }
  };
};

export const actionUpdateProfile = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(updateProfileType));
    try {
      const res = await updateProfile(token, payload);
      if (res.success) {
        return dispatch(successState(updateProfileType, res.data, token));
      }
      return dispatch(failedState(updateProfileType, res.message, token));
    } catch (err) {
      return dispatch(failedState(updateProfileType, err.message, token));
    }
  };
};

export const actionSignUp1 = (
  payloadObject: object,
  applyType: string,
  type: string,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(signUp1));
    try {
      const res = await signUp(payloadObject, applyType, type);
      if (res.success) {
        return dispatch(successState(signUp1, res.data, payloadObject));
      }
      return dispatch(failedState(signUp1, res.message, payloadObject));
    } catch (err) {
      return dispatch(failedState(signUp1, err.message, payloadObject));
    }
  };
};

export const actionSignUp2 = (
  payloadObject: object,
  applyType: string,
  type: string,
) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(signUp2));
    try {
      const res = await signUp(payloadObject, applyType, type);
      if (res.success) {
        return dispatch(successState(signUp2, res.data, payloadObject));
      }
      return dispatch(failedState(signUp2, res.message, payloadObject));
    } catch (err) {
      return dispatch(failedState(signUp2, err.message, payloadObject));
    }
  };
};

export const actionSignUp3 = (payloadObject: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(signUp3));
    try {
      const res = await signUpLast(payloadObject);
      if (res.success) {
        return dispatch(successState(signUp3, res.data, payloadObject));
      }
      return dispatch(failedState(signUp3, res.message, payloadObject));
    } catch (err) {
      return dispatch(failedState(signUp3, err.message, payloadObject));
    }
  };
};

export const actionChangePasswordUser = (token: string, payload: object) => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState(changePassUserType));
    try {
      const res = await changePasswordUser(token, payload);
      if (res.success) {
        return dispatch(successState(changePassUserType, res.data, token));
      }
      return dispatch(failedState(changePassUserType, res.message, token));
    } catch (err) {
      return dispatch(failedState(changePassUserType, err.message, token));
    }
  };
};

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
