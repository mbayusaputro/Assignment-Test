import {Dispatch} from 'redux';
import {COUNTRY, COUNTRY_SUCCESS, COUNTRY_FAILED} from './types';
import {listCountry} from '../../services/api';

const requestState = () => ({
  type: COUNTRY,
});

const successState = (data: any) => ({
  type: COUNTRY_SUCCESS,
  data,
});

const failedState = (message: any) => ({
  type: COUNTRY_FAILED,
  message,
});

export const actionListCountry = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestState());
    try {
      const res = await listCountry();
      if (res.success) {
        return dispatch(successState(res.data));
      }
      return dispatch(failedState(res.message));
    } catch (err) {
      return dispatch(failedState(err.message));
    }
  };
};
